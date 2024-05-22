'use client'


const ChartCard = ({lastDiagnosis, title}) => {

    return (
        <div className={`w-full flex justify-center items-center `} >
            <div>
                <p className="inner-card-title-22pt m-3">{lastDiagnosis && lastDiagnosis.blood_pressure[title.toLowerCase()].value}</p>
                <p className="body-regular-14 m-2">{lastDiagnosis && lastDiagnosis.blood_pressure[title.toLowerCase()].levels}</p>
            </div>           
        </div>
    )
};

export default ChartCard