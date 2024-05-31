import { Suspense } from "react";
import { getOnePatient} from '@/data/getData';

import Image from 'next/image';
import respiratoryRate from "@public/respiratoryRate.svg";
import temperature from "@public/temperature.svg";
import HeartBPM from "@public/HeartBPM.svg";

import Loading from '../Loading';
import DiagnosisItem from "./DiagnosisItem";

const DiagnosisStats = async () => { 

    let lastDiagnosis = await getOnePatient('Jessica Taylor').then(res => {
        return res.diagnosis_history[0]       
    });

    return (
        <div className="w-full grid grid-cols-3 gap-5 col-span-full">
            <div className="rounded-xl bg-secRow-cardBlue ml18">
                <Image src={respiratoryRate} className='m-4' />
                <p className="card-medium-title-16 ml-4">Respiratory Rate</p>
                <Suspense fallback={<Loading />}>
                    <DiagnosisItem levels={lastDiagnosis && lastDiagnosis.respiratory_rate.levels} value={lastDiagnosis && lastDiagnosis.respiratory_rate.value} />
                </Suspense>

            </div>
            <div className="rounded-xl bg-secRow-cardPink ">
                <Image src={temperature} className='m-4' />
                <p className="card-medium-title-16 ml-4">Temperature</p>
                <Suspense fallback={<Loading />}>
                    <DiagnosisItem levels={lastDiagnosis && lastDiagnosis.temperature.levels} value={lastDiagnosis && lastDiagnosis.temperature.value} />
                </Suspense>
            </div>
            <div className="rounded-xl bg-secRow-cardViolet mr18">
                <Image src={HeartBPM} className='m-4' />
                <p className="card-medium-title-16 ml-4">Heart Rate</p>
                <Suspense fallback={<Loading />}>
                    <DiagnosisItem levels={lastDiagnosis && lastDiagnosis.heart_rate.levels} value={lastDiagnosis && lastDiagnosis.heart_rate.value} />
                </Suspense>

            </div>
        </div>

    );
}

export default DiagnosisStats