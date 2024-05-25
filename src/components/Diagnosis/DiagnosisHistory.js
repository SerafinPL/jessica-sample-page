import { Suspense } from "react";
import Image from 'next/image';
import respiratoryRate from "@public/respiratoryRate.svg";
import temperature from "@public/temperature.svg";
import HeartBPM from "@public/HeartBPM.svg";

import CardTitle from "@/components/CardTitle";
import BloodChart from "../BloodChart";
import ChartLegend from "../Chart/ChartLegend";
import ChartCard from "../Chart/ChartCard";
import Loading from '../Loading';


const DiagnosisHistory = async () => {
    return (
        <div className="w-full grid grid-cols-3 gap-5 px18 bg-white rounded-xl pb-5 mb-8">

            <div className="mt18 col-span-full">
                <CardTitle title='Diagnosis History'></CardTitle>
            </div>
            <div className="mt18 col-span-full bg-secRow-violet rounded-xl p-4 ">
                <p className="inner-card-title-22pt  ">Blood Pressure</p>
                <div className={`w-full flex justify-center items-start `} >
                    <BloodChart />
                    <ChartLegend />
                </div>
            </div>

            <div className="rounded-xl bg-secRow-cardBlue">
                <Image src={respiratoryRate} className='mb-2.5' />
            </div>
            <div className="rounded-xl bg-secRow-cardPink">
                <Image src={temperature} className='mb-2.5' />
            </div>
            <div className="rounded-xl bg-secRow-cardViolet">
                <Image src={HeartBPM} className='' />
            </div>
        </div>
    );
}

export default DiagnosisHistory