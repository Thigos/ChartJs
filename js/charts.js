const canvasChartLine = document.getElementById('chart_line');
const canvasChartBar = document.getElementById('chart_bar');

/* DATA */
const HOURS = [
    '12:00', 
    '13:00', 
    '14:00', 
    '15:00', 
    '16:00', 
    '17:00'
];

const MONTHS = [
    'Janeiro',
    'Fevereiro',
    'Março',
    'Abril',
    'Maio',
    'Junho'
];

var temp_data_hours = [30, 29, 28, 25, 22, 23];
var umid_data_hours = [80, 82, 80, 85, 80, 83];

var temp_data_months = [22, 24, 27, 23, 20, 18];
var umid_data_months = [90, 89, 93, 87, 88, 82];


/* DATA STRUCTURE */
const GET_TEMP_DATA = (temp_data) => {
    return {
        label: 'Temperatura',
        data: temp_data,
        borderColor: '#FF6384',
        backgroundColor: '#FF6384',
    };
};

const GET_UMID_DATA = (umid_data) => {
    return {
        label: 'Umidade',
        data: umid_data,
        borderColor: '#36A2EB',
        backgroundColor: '#36A2EB',
    };
};


/* Line Chart */
var chartLine = new Chart(canvasChartLine, {
    type: 'line',
    data: {
        labels: HOURS,
        datasets: [
            GET_TEMP_DATA(temp_data_hours),
            GET_UMID_DATA(umid_data_hours)
        ]
    }
});

/* Bar Chart */
var chartBar = new Chart(canvasChartBar, {
    type: 'bar',
    data: {
        labels: MONTHS,
        datasets: [
            GET_TEMP_DATA(temp_data_months),
            GET_UMID_DATA(umid_data_months)
        ]
    }
});


/* ONCLICK */
function active(bt){
    const elementosAtivos = document.querySelectorAll('.active');
    elementosAtivos.forEach(function(elemento) {
        elemento.classList.remove('active');
    });
    bt.classList.add('active');
}

function showAll(){
    /* Line Chart */
    chartLine.data.datasets = [
        GET_TEMP_DATA(temp_data_hours),
        GET_UMID_DATA(umid_data_hours)
    ];
    chartLine.update()

    /* Bar Chart */
    chartBar.data.datasets = [
        GET_TEMP_DATA(temp_data_months),
        GET_UMID_DATA(umid_data_months)
    ];
    chartBar.update();
}

function showTemp(){
    /* Line Chart */
    chartLine.data.datasets = [
        GET_TEMP_DATA(temp_data_hours)
    ];
    chartLine.update()

    /* Bar Chart */
    chartBar.data.datasets = [
        GET_TEMP_DATA(temp_data_months)
    ];
    chartBar.update();
}

function showUmid(){
    /* Line Chart */
    chartLine.data.datasets = [
        GET_UMID_DATA(umid_data_hours)
    ];
    chartLine.update()

    /* Bar Chart */
    chartBar.data.datasets = [
        GET_UMID_DATA(umid_data_months)
    ];
    chartBar.update();
}