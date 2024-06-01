
import ApexChart from "./AppexChart";

const PatientChart = ({ data }) => {

    const series = [
        {
            data: data?.diagnosis_history.map(els => (`${+els.blood_pressure.diastolic.value}`)),
        },
        {
            data: data?.diagnosis_history.map(els => (`${+els.blood_pressure.systolic.value}`)),
        }
    ];

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
            categories: data?.diagnosis_history.map(els => (`${els.month.slice(0, 3)}, ${els.year}`)),
        },
        colors: ['#C26EB4', '#7E6CAB']
    }
    return (<ApexChart
        options={options}
        series={series}
        type="line"
        width="450" />
        )
};

export default PatientChart