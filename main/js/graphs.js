
queue()
    .defer(d3.csv, "main/data/Titanic.csv")
    .await(makeGraphs);
    
function makeGraphs(error, titanicData) {
    var ndx = crossfilter(titanicData);
    
    

show_gender_selector(ndx);
show_gender_balance(ndx);
show_survived_selector(ndx);
show_class_balance(ndx);
show_survived_balance(ndx);
show_surv_balance(ndx);
show_age_balance(ndx);

dc.renderAll();

}

function show_gender_selector(ndx) {
    var dim = ndx.dimension(dc.pluck('Sex'));
    var group = dim.group();
    
    dc.selectMenu("#gender")
        .dimension(dim)
        .group(group);
}

function show_survived_selector(ndx) {
    var dim = ndx.dimension(dc.pluck('Survived'));
    var group = dim.group();
    
    dc.selectMenu("#survived")
        .dimension(dim)
        .group(group);
}

function show_gender_balance(ndx) {
    var dim = ndx.dimension(dc.pluck('Sex'));
    var group = dim.group();
    
    dc.barChart("#gender-balance")
        .width(400)
        .height(300)
        .margins({top: 10, right: 50, bottom: 30, left: 50})
        .dimension(dim)
        .group(group)
        .transitionDuration(500)
        .x(d3.scale.ordinal())
        .xUnits(dc.units.ordinal)
        .elasticY(true)
        .xAxisLabel("Gender")
        .yAxis().ticks(10);
        
}

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
     
     
    dc.barChart("#surv-balance")
        .width(400)
        .height(300)
        .margins({top: 10, right: 50, bottom: 30, left: 50})
        .group(group)
        .dimension(dim)
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

function show_survived_balance(ndx) {

    var survived_dim = ndx.dimension(dc.pluck('Survived'));
    var show_survived_balance = survived_dim.group();

    function survivors(k, v) {
        if (k === "1") {
            return "There were " + v + " survivors";
        }
        else {
            return v + " passengers died";
        }
    }

    dc.pieChart('#survived-pie-chart')
        .height(330)
        .radius(90)
        .transitionDuration(1500)
        .dimension(survived_dim)
        .group(show_survived_balance)
        .on('pretransition', function(chart) {
            chart.selectAll('text.pie-slice').text(function(d) {
                
                  if (d.data.key === "1") {
                   return ("Survived");
                }
                   else {return ("Died");
               }
            });
        })
        .title(function(d) {
            return survivors(d.key, d.value);
            
        });
}

function show_class_balance(ndx) {
    var dim = ndx.dimension(dc.pluck('PClass'));
    var group = dim.group();
    
    dc.barChart("#class-chart")
        .width(400)
        .height(300)
        .margins({top: 10, right: 50, bottom: 30, left: 50})
        .dimension(dim)
        .group(group)
        .transitionDuration(500)
        .x(d3.scale.ordinal())
        .xUnits(dc.units.ordinal)
        .elasticY(true)
        .xAxisLabel("Class of Passengers")
        .yAxis().ticks(10);
}


function show_age_balance(ndx) {
    var dim = ndx.dimension(dc.pluck('Age'));
   
    var group = dim.group();
      function remove_empty_strings(show_age_balance) {
        return {
            all:function () {
                return show_age_balance.all().filter(function(d) {
                   
                    return d.key !== ""; 
                });
            }
        };
    }
    
    
    dc.barChart("#age-balance-chart")
        .width(900)
        .height(300)
        .margins({top: 10, right: 50, bottom: 30, left: 50})
        .dimension(dim)
        .group(group)
        .transitionDuration(500)
        .x(d3.scale.ordinal())
        .xUnits(dc.units.ordinal)
        .elasticY(true)
        .xAxisLabel("Age of Passengers")
        .yAxis().ticks(2);
}



