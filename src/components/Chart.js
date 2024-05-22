'use client'


import Chart from "react-apexcharts";

const PatientChart = (props) => {
    const series = [
        {
            data: props.data.diagnosis_history.map(els => (`${+els.blood_pressure.diastolic.value}`)),
        },
        {
            data: props.data.diagnosis_history.map(els => (`${+els.blood_pressure.systolic.value}`)),
        }
    ];
    console.log(props);

    const options = {
        chart: {
            id: "basic-bar",
        },
        legend: {
            show: false
          },
        stroke: {
            curve: 'smooth',
            width: 2,
        },
        markers: {
            size: 5,
        },
        xaxis: {
            categories: props.data.diagnosis_history.map(els => (`${els.month.slice(0, 3)}, ${els.year}`)),
        },
        colors:['#C26EB4', '#7E6CAB']
    }



    return (<Chart
        options={options}
        series={series}
        type="line"
        width="450"
    />

    )
};

export default PatientChart