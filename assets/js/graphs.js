queue()
    .defer(d3.csv, "assets/data/Titanic.csv")
    .await(makeGraphs);
    
function makeGraphs(error, titanicData) {
    var ndx = crossfilter(titanicData);
 /*---------------------------------------Numbers to order----------------*/   
    function age_to_integer(arg1) {
        titanicData.forEach(function(d) {
            var age_lower = arg1.toLowerCase();
            if (d[arg1] == "NA") {
                d[age_lower] = "";
            }
            else {
                d[age_lower] = Math.round(d[arg1]);
            }
        });
    }

    age_to_integer("Age");
/*---------------------------------------All charts----------------*/     
show_gender_selector(ndx);
show_gender_balance(ndx);
show_survived_selector(ndx);
show_class_balance(ndx);
show_age_sort(ndx);
show_surv_balance(ndx);
show_age_balance(ndx);

dc.renderAll();

}
/*---------------------------------------Gender selector----------------*/ 
function show_gender_selector(ndx) {
    var dim = ndx.dimension(dc.pluck('Sex'));
    var dim = ndx.dimension(function(d){
           
          if (d.Sex === "male") {
            return "Male";
          } else {
            return "Female";
        }
    });
    var group = dim.group();
    
    dc.selectMenu("#gender")
        .dimension(dim)
        .group(group);
}
/*---------------------------------------Survivor selector----------------*/ 
function show_survived_selector(ndx) {
    var dim = ndx.dimension(dc.pluck('Survived'));
        var dim = ndx.dimension(function(d){
           
          if (d.Survived === "1") {
            return "Survived";
          } else {
            return "Died";
        }
    });
    var group = dim.group();
    
    dc.selectMenu("#survived")
        .dimension(dim)
        .group(group);
}
/*---------------------------------------First row bar-chart----------------*/ 
function show_gender_balance(ndx) {
    var dim = ndx.dimension(dc.pluck('Sex'));
    var group = dim.group();
    var BarChartColors = d3.scale.ordinal()
        .range(['#F1948A','#4285F4']);
        
    dc.barChart("#gender-balance")
        .width(400)
        .height(300)
        .margins({top: 10, right: 50, bottom: 30, left: 50})
        .dimension(dim)
        .group(group)
        .colorAccessor(function(d) {
            return d.key;
        })
        .colors(BarChartColors)
        .transitionDuration(500)
        .x(d3.scale.ordinal())
        .xUnits(dc.units.ordinal)
        .elasticY(true)
        .xAxisLabel("Gender")
        .yAxis().ticks(10);
        
}
/*---------------------------------------First second bar-chart----------------*/ 
function show_surv_balance(ndx) {
    var dimSurvived = ndx.dimension(dc.pluck('Survived'));
        var dim = ndx.dimension(function(d){
           
        
        if (d.Survived === "1") {
            return "Survived";
        } else {
            return "Died";
        }
    });
    var group = dim.group();
    var survivorsBarChartColors = d3.scale.ordinal()
        .range(['#7B241C', '#F5B041']);
     
    dc.barChart("#surv-balance")
        .width(400)
        .height(300)
        .margins({top: 10, right: 50, bottom: 30, left: 50})
        .group(group)
        .dimension(dim)
        .colorAccessor(function(d) {
            return d.key;
        })
        .colors(survivorsBarChartColors)
        .title(function(dTag) {
            if (dTag.key === "Survived")
             return dTag.value + " Survived ";
              
             else {
                return dTag.value + " Passengers Died";
               }
        })
        
        .transitionDuration(500)
        .x(d3.scale.ordinal())
        .xUnits(dc.units.ordinal)
        .elasticY(true)
        .xAxisLabel("Survivors")
        .yAxisLabel("Person")
        .yAxis().ticks(10);
}
/*---------------------------------------First row pie-chart----------------*/ 
function show_age_sort(ndx) {
   var dim = ndx.dimension(dc.pluck('Age'));
   var group = dim.group();
   var agePieChartColors = d3.scale.ordinal()
        .range(['#E67E22', '#F39C12', 'brown', '#7d381f']);
   var agesDim = ndx.dimension(function(d) {
      switch  (true) {
         
          case (d.Age < 21):
              return "Under 21y";
          case (50 > d.Age):
              return "21y to 50y";
          case (d.Age >= 50):
              return "Over 50y";
          case (d.Age === 'NA'):
              return "Age N/A";      
      }
  
  });
  
  
  var age_sort_group = agesDim.group();
  dc.pieChart('#age-pie-chart')
      .height(330)
      .radius(90)
      .transitionDuration(1500)
      .dimension(agesDim)
      .group(age_sort_group)
      .colors(agePieChartColors);
  }
/*---------------------------------------Second row class bar-chart----------------*/ 
function show_class_balance(ndx) {
    var dim = ndx.dimension(dc.pluck('PClass'));
    var group = dim.group();
    var BarChartColors = d3.scale.ordinal()
        .range(['#E67E22','gold','#F39C12']);
        
    dc.barChart("#class-chart")
        .width(400)
        .height(300)
        .margins({top: 10, right: 50, bottom: 30, left: 50})
        .dimension(dim)
        .group(group)
        .colorAccessor(function(d) {
            return d.key;
        })
        .colors(BarChartColors)
        .transitionDuration(500)
        .x(d3.scale.ordinal())
        .xUnits(dc.units.ordinal)
        .elasticY(true)
        .xAxisLabel("Class of Passengers")
        .yAxis().ticks(10);
}
/*---------------------------------------Second row age gouped bar-chart----------------*/ 
function show_age_balance(ndx) {
    var ageDim = ndx.dimension(dc.pluck('age'));
    var ageGroup = ageDim.group();
         function remove_empty_strings(ageGroup) {
          return {
              all:function () {
                   return ageGroup.all().filter(function(d) {
                    
                    
                  return d.key !== "";
                    
                  });
               }
           };
      }
    
    var filtered =remove_empty_strings(ageGroup);
  
     var BarChartColors = d3.scale.ordinal()
        .range(['#7B241C','#F39C12','#F7DC6F']);
     
    dc.barChart("#age-balance-chart")
        .width(1000)
        .height(300)
        .margins({ top: 10, right: 50, bottom: 30, left: 50 })
        .dimension(ageDim)
        .group(filtered)
        .colorAccessor(function(d) {
            return d.key;
        })
        .colors(BarChartColors)
        .transitionDuration(500)
        .x(d3.scale.ordinal())
        .xUnits(dc.units.ordinal)
        .elasticY(true)
        .xAxisLabel("Age of Passengers")
        .yAxis().ticks(2);
}
