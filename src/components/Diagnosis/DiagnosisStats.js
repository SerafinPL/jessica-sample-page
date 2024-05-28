import { Suspense } from "react";
import Image from 'next/image';
import respiratoryRate from "@public/respiratoryRate.svg";
import temperature from "@public/temperature.svg";
import HeartBPM from "@public/HeartBPM.svg";

import Loading from '../Loading';

import CardTitle from "@/components/CardTitle";
import BloodChart from "../Chart/BloodChart";
import ChartLegend from "../Chart/ChartLegend";
import { getArrow, getOnePatient } from "@/data/getData";
import LevelView from "../LevelsView";
import DiagnosisItem from "./DiagnosisItem";

const DiagnosisStats = async () => {

    let lastDiagnosis = await getOnePatient('Jessica Taylor').then(res => {
        console.log(res)
        return res.diagnosis_history[0]
    });

    return (
        <div className="w-full grid grid-cols-3 gap-5 col-span-full">
            <div className="rounded-xl bg-secRow-cardBlue ml18">
                <Image src={respiratoryRate} className='m-4' />
                <p className="card-medium-title-16 ml-4">Respiratory Rate</p>
                <Suspense fallback={<Loading />}>
                    <DiagnosisItem levels={lastDiagnosis.respiratory_rate.levels} value={lastDiagnosis.respiratory_rate.value} />
                </Suspense>

            </div>
            <div className="rounded-xl bg-secRow-cardPink ">
                <Image src={temperature} className='m-4' />
                <p className="card-medium-title-16 ml-4">Temperature</p>
                <Suspense fallback={<Loading />}>
                    <DiagnosisItem levels={lastDiagnosis.temperature.levels} value={lastDiagnosis.temperature.value} />
                </Suspense>
            </div>
            <div className="rounded-xl bg-secRow-cardViolet mr18">
                <Image src={HeartBPM} className='m-4' />
                <p className="card-medium-title-16 ml-4">Heart Rate</p>
                <Suspense fallback={<Loading />}>
                    <DiagnosisItem levels={lastDiagnosis.heart_rate.levels} value={lastDiagnosis.heart_rate.value} />
                </Suspense>

            </div>
        </div>

    );
}

export default DiagnosisStats