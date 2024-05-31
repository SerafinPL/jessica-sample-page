import { getOnePatient } from '@/data/getData'; 
import LevelView from "../Chart/LevelsView";

const DiagnosisItem = async ({ value }) => {

    let view = await getOnePatient('Jessica Taylor').then(res => {
        return new Promise((resolve, reject) => {
            setTimeout(() => {
              resolve(res.diagnosis_history[0][value]);
            }, 2500);
          });         
    });

    return (
        <div >
            <p className="card-extraBold-title-30 ml-4">{view.value} bpm</p>
            <LevelView levels={view.levels} />
        </div>
    );
}

export default DiagnosisItem