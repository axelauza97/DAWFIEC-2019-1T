$(document).ready(function () {
    var labels = []
    var datas = []
    $.ajax({
        url: 'http://127.0.0.1:8000/api/graficoPie/',
        method:'GET',
   success: function(data) {
            for(let i = 0;i<data.length;i++){

                    
                    datas.push(data[i].dcount)
                    labels.push(data[i].cod_usuario)
                  
            }

            var datos = {
                type: "pie",
                data: {
                    datasets: [{
                        data: datas,
                        backgroundColor: [
                            "#F7464A",
                            "#46BFBD",
                            "#FDB45C",
                            "#949FB1",
                            "#4D5360",
                        ],
                    }],
                    labels: labels
                },
                options: {
                    responsive: true,
                }
            };
        
            var canvas = document.getElementById('chart').getContext('2d');
            window.pie = new Chart(canvas, datos);



            var options = {
                chart: {
                    width: 380,
                    type: 'pie',
                },
                labels: labels,
                series: datas,
                responsive: [{
                    breakpoint: 480,
                    options: {
                        chart: {
                            width: 200
                        },
                        legend: {
                            position: 'bottom'
                        }
                    }
                }]
            }
            
            var chart = new ApexCharts(
                document.getElementById('chart2'),
                options
            );
            
            chart.render();

          }

 
    

        
    })
    


var options = {
    chart: {
      type: 'bar'
    },
    series: [{
      name: 'sales',
      data: [30,50]
    }],
    xaxis: {
      categories: ["certificados","proformas"]
    }
  }
  
  var chart = new ApexCharts(document.querySelector("#chart4"), options);
  
  chart.render();

});
