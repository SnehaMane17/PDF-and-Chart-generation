
// PDF Generation

function generatePDF() {
   
    const element = document.getElementById('main');
    html2pdf().from(element).save("MyPDF");
}

//Chart Generation

function generateChart(){
    Highcharts.chart('container', {
        data: {
          table: 'datatable',
          startRow: 0,
          startColumn: 0,
          endColumn: 1
        },
        chart: {
          type: 'column'
        },
        title: {
          text: 'Data extracted from a HTML table in the page'
        },
        yAxis: {
          allowDecimals: false,
          title: {
            text: 'Units'
          }
        },
        tooltip: {
          formatter: function () {
            return '<b>' + this.series.name + '</b><br/>' +
              this.point.y + ' ' + this.point.name.toLowerCase();
          }
        }
      });
}