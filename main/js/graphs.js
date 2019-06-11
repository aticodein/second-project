queue()
    .defer(d3.csv, "main/data/Titanic.csv")
    .await(makeGraphs);
    
function makeGraphs(error, titanicData) {
    var ndx = crossfilter(titanicData);
    
    titanicData.forEach(function(d){
        d.titanic = parseInt(d.titanic);
    
});

show_gender_selector(ndx);
show_gender_balance(ndx);
show_survived_selector(ndx);
show_class_balance(ndx);
show_survived_balance(ndx);
show_surv_balance(ndx);


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
    var dim = ndx.dimension(dc.pluck('Survived'));
    var group = dim.group();
    
    dc.barChart("#surv-balance")
        .width(400)
        .height(300)
        .margins({top: 10, right: 50, bottom: 30, left: 50})
        .dimension(dim)
        .group(group)
        .transitionDuration(500)
        .x(d3.scale.ordinal())
        .xUnits(dc.units.ordinal)
        .elasticY(true)
        .xAxisLabel("Survivers")
        .yAxis().ticks(10);
}

function show_survived_balance(ndx) {
  
    var survived_dim = ndx.dimension(dc.pluck('Survived'));
       var show_survived_balance = survived_dim.group();
       
           dc.pieChart('#survived-pie-chart')
            .height(330)
            .radius(90)
            .transitionDuration(1500)
            .dimension(survived_dim)
            .group(show_survived_balance);
    
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
