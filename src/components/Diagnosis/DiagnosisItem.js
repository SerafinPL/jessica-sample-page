'use client'
import LevelView from "../LevelsView";

const DiagnosisItem = ({levels, value}) => {



    return (
        <div >
            <p className="card-extraBold-title-30 ml-4">{value} bpm</p>
            <LevelView levels={levels} />
        </div>
    );
}

export default DiagnosisItem