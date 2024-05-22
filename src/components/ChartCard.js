'use client'


const ChartCard = ({lastDiagnosis, title}) => {

    return (
        <div className={`w-full flex justify-center items-center `} >
            <div>
                <p className=""><strong>{lastDiagnosis && lastDiagnosis.blood_pressure[title.toLowerCase()].value}</strong></p>
                <p className="">{lastDiagnosis && lastDiagnosis.blood_pressure[title.toLowerCase()].levels}</p>
            </div>           
        </div>
    )
};

export default ChartCard