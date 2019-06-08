queue()
    .defer(d3.csv, "/main/data/Titanic.csv")
    .await(makeGraphs);
    
function makeGraphs(error, titanicData) {
    var ndx = crossfilter(titanicData);
    
    titanicData.forEach(function(d){
        d.titanic = parseInt(d.titanic);
    
});

show_gender_selector(ndx);

dc.renderAll();
}

function show_gender_selector(ndx) {
    var dim = ndx.dimension(dc.pluck('Sex'));
    var group = dim.group();
    
    dc.selectMenu("#gender")
        .dimension(dim)
        .group(group);
}