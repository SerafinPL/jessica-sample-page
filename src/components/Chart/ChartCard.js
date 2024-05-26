
'use client'

import LevelsView from "../LevelsView";


const ChartCard = ({lastDiagnosis, title}) => {

    return (
        <div className={`w-full flex justify-center items-center `} >
            <div>
                <p className="inner-card-title-22pt m-3">{lastDiagnosis && lastDiagnosis.blood_pressure[title.toLowerCase()].value}</p>
                <LevelsView levels={lastDiagnosis.blood_pressure[title.toLowerCase()].levels}/>                
            </div>           
        </div>
    )
};

export default ChartCard