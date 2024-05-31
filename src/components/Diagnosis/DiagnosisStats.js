
import { Suspense } from "react";

import Image from 'next/image';
import respiratoryRate from "@public/respiratoryRate.svg";
import temperature from "@public/temperature.svg";
import HeartBPM from "@public/HeartBPM.svg";

import Loading from '../Loading';
import DiagnosisItem from "./DiagnosisItem";

const DiagnosisStats = async () => {

    return (
        <div className="w-full grid grid-cols-3 gap-5 col-span-full">
            <div className="rounded-xl bg-secRow-cardBlue ml18">
                <Image src={respiratoryRate} className='m-4' />
                <p className="card-medium-title-16 ml-4">Respiratory Rate</p>
                <Suspense fallback={<Loading />}>
                    <DiagnosisItem value={'respiratory_rate'} />
                </Suspense>
            </div>
            <div className="rounded-xl bg-secRow-cardPink ">
                <Image src={temperature} className='m-4' />
                <p className="card-medium-title-16 ml-4">Temperature</p>
                <Suspense fallback={<Loading />}>
                    <DiagnosisItem value={'temperature'} />
                </Suspense>
            </div>
            <div className="rounded-xl bg-secRow-cardViolet mr18">
                <Image src={HeartBPM} className='m-4' />
                <p className="card-medium-title-16 ml-4">Heart Rate</p>
                <Suspense fallback={<Loading />}>
                    <DiagnosisItem value={'heart_rate'} />
                </Suspense>
            </div>
        </div>

    );
}

export default DiagnosisStats