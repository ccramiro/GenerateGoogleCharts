google.load( 'visualization', '1', {packages: ['corechart', 'line']} );
google.setOnLoadCallback( drawBasic );

function drawBasic() {

      var data = new google.visualization.DataTable();
      data.addColumn('number', 'X');
      data.addColumn('number', 'Line');

      data.addRows([
      ]);

      var options = {
        title: 'Title',
        subtitle: 'Subtitle',
        hAxis: {
          title: 'Y Axis'
        },
        vAxis: {
          title: 'X Axis'
        },
        width: 800,
        height: 600
      };

      var chart = new google.visualization.LineChart(document.getElementById('chart_div'));

      chart.draw(data, options);

}
