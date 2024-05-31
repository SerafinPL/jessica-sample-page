import { getOnePatient } from '@/data/getData';

import LevelsView from "./LevelsView";


const ChartCard = async ({title}) => {

    let lastDiagnosis = await getOnePatient('Jessica Taylor').then(res => {                
             return res.diagnosis_history[0]
    });
    
    return (
        <div className={`w-full flex justify-center items-center `} >
            <div>
                <p className="inner-card-title-22pt m-3">{lastDiagnosis.blood_pressure[title.toLowerCase()].value}</p>
                <LevelsView levels={lastDiagnosis.blood_pressure[title.toLowerCase()].levels}/>                
            </div>           
        </div>
    )
};

export default ChartCard