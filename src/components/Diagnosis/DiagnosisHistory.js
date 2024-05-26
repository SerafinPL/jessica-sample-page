import { Suspense } from "react";
import Image from 'next/image';
import respiratoryRate from "@public/respiratoryRate.svg";
import temperature from "@public/temperature.svg";
import HeartBPM from "@public/HeartBPM.svg";

import CardTitle from "@/components/CardTitle";
import BloodChart from "../Chart/BloodChart";
import ChartLegend from "../Chart/ChartLegend";
import { getArrow } from "@/data/getData";
import LevelView from "../LevelsView";
import DiagnosisStats from "./DiagnosisStats";


const DiagnosisHistory = (props) => {
    return (
        <div className="w-full grid grid-cols-3 gap-5  bg-white rounded-xl pb-5 mb-8 diagnosis-height">

            <div className="mt18 col-span-full">
                <CardTitle title='Diagnosis History'></CardTitle>
            </div>
            <div className="mt18 col-span-full bg-secRow-violet mx18 rounded-xl p-4 ">
                <p className="inner-card-title-22pt  ">Blood Pressure</p>
                <div className={`w-full flex justify-center items-start `} >
                    <BloodChart serwerData={props.serwerData && props.serwerData} />
                    <ChartLegend serwerData={props.serwerData && props.serwerData} />
                </div>
            </div>
<DiagnosisStats/>
            {/* <div className="rounded-xl bg-secRow-cardBlue ml18">
                <Image src={respiratoryRate} className='m-4' />
                <p className="card-medium-title-16 ml-4">Respiratory Rate</p>
                <p className="card-extraBold-title-30 ml-4">{props.serwerData && props.serwerData.diagnosis_history[0].respiratory_rate.value} bpm</p>
                <LevelView levels={props.serwerData.diagnosis_history[0].respiratory_rate.levels} />
            </div>
            <div className="rounded-xl bg-secRow-cardPink ">
                <Image src={temperature} className='m-4' />
                <p className="card-medium-title-16 ml-4">Temperature</p>
                <p className="card-extraBold-title-30 ml-4">{props.serwerData && props.serwerData.diagnosis_history[0].temperature.value}°F</p>
                <LevelView levels={props.serwerData.diagnosis_history[0].temperature.levels} />
            </div>
            <div className="rounded-xl bg-secRow-cardViolet mr18">
                <Image src={HeartBPM} className='m-4' />
                <p className="card-medium-title-16 ml-4">Heart Rate</p>
                <p className="card-extraBold-title-30 ml-4">{props.serwerData && props.serwerData.diagnosis_history[0].heart_rate.value} bpm</p>
                <LevelView levels={props.serwerData.diagnosis_history[0].heart_rate.levels} />

            </div> */}
        </div>
    );
}

export default DiagnosisHistory