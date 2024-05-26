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
            <DiagnosisStats />
  
        </div>
    );
}

export default DiagnosisHistory