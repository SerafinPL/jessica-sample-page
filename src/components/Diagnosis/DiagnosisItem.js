
import { Suspense } from "react";


import Loading from '../Loading';

import LevelView from "../LevelsView";

const DiagnosisItem = (props) => {

    return (
        <div >

                <p className="card-extraBold-title-30 ml-4">{props.value} bpm</p>
                <LevelView levels={props.levels} />
        </div>
    );
}

export default DiagnosisItem