import { Suspense } from "react";


import Loading from '../Loading';

import LevelView from "../LevelsView";

const DiagnosisItem = async (props) => {

    return (
        <div >
            <Suspense fallback={<Loading />}>

                <p className="card-extraBold-title-30 ml-4">{props.value} bpm</p>
                <LevelView levels={props.levels} />
            </Suspense>
        </div>
    );
}

export default DiagnosisItem