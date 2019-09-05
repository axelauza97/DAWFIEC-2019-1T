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
        $.ajax({
        url: 'http://127.0.0.1:8000/api/graficoPie2/',
        method:'GET',
   success: function(data) {
    var labels2 = []
    var datas2 = []
            for(let i = 0;i<data.length;i++){

                    
                    datas2.push(data[i].dcount)
                    labels2.push(data[i].cod_usuario)
                  
            }




            var options = {
                chart: {
                    width: 380,
                    type: 'pie',
                },
                labels: labels2,
                series: datas2,
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
                document.getElementById('chart5'),
                options
            );
            
            chart.render();

          }

 
    

        
    })
    


    $.ajax({
        url: 'http://127.0.0.1:8000/api/graficoBar/',
        method:'GET',
   success: function(data) {
         

            var options = {
                chart: {
                  type: 'bar'
                },
                series: [{
                  name: 'Data',
                  data: [data.certificados,data.proformas]
                }],
                xaxis: {
                  categories: ["certificados","proformas"]
                }
              }
              
              var chart = new ApexCharts(document.querySelector("#chart4"), options);
              
              chart.render();
        


          }

 
    

        
    })

});
