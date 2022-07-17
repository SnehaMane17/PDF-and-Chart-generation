function generatePDF() {
    // Choose the element that our invoice is rendered in.
    const element = document.getElementById('main');
    // Choose the element and save the PDF for our user.
    html2pdf().from(element).save("MyPDF");
}


var chart, 
  options = { 
    debug: true, 
    type: 'column', 
    title_label_text: 'Take HTML and Chart it.', 
    defaultPoint_label_visible: true
  }; 
  
JSC.ready().then(function() { 
  options.series = [ 
    getData('table', 'States') 
  ]; 
  chart = new JSC.Chart('chartDiv', options); 
}); 
  
function getData(tableId, seriesName) { 
  var series = { points: [], name: seriesName }; 
  var rowItems = document.querySelectorAll( 
    '#dataTable tr'
  ); 
  for (var i = 0; i < rowItems.length; i++) { 
    var rowItem = rowItems[i]; 
    var tds = rowItem.children; 
    var point = [ 
      tds[0].innerText, 
      parseInt(tds[1].innerText) 
    ]; 
    series.points.push(point); 
  } 
  
  return series; 
} 