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


const DiagnosisHistory = (props) => {
    return (
        <div className="w-full grid grid-cols-3 gap-5  bg-white rounded-xl pb-5 mb-8 diagnosis-height">

            <div className="mt18 col-span-full">
                <CardTitle title='Diagnosis History'></CardTitle>
            </div>
            <div className="mt18 col-span-full bg-secRow-violet mx18 rounded-xl p-4 ">
                <p className="inner-card-title-22pt  ">Blood Pressure</p>
                <div className={`w-full flex justify-center items-start `} >
                    <BloodChart serwerData={props.serwerData && props.serwerData}/>
                    <ChartLegend serwerData={props.serwerData && props.serwerData}/>
                </div>
            </div>

            <div className="rounded-xl bg-secRow-cardBlue ml18">
                <Image src={respiratoryRate} className='m-4' />
                <p className="card-medium-title-16 ml-4">Respiratory Rate</p>   
                <p className="card-extraBold-title-30 ml-4">{props.serwerData && props.serwerData.diagnosis_history[0].respiratory_rate.value} bpm</p>
                <p className="body-regular-14 ml-4">{props.serwerData && props.serwerData.diagnosis_history[0].respiratory_rate.levels}</p>
            </div>
            <div className="rounded-xl bg-secRow-cardPink ">
                <Image src={temperature} className='m-4' />
                <p className="card-medium-title-16 ml-4">Temperature</p>   
                <p className="card-extraBold-title-30 ml-4">{props.serwerData && props.serwerData.diagnosis_history[0].temperature.value}°F</p>
                <p className="body-regular-14 ml-4">{props.serwerData && props.serwerData.diagnosis_history[0].temperature.levels}</p>
            </div>
            <div className="rounded-xl bg-secRow-cardViolet mr18">
                <Image src={HeartBPM} className='m-4' />
                <p className="card-medium-title-16 ml-4">Heart Rate</p>   
                <p className="card-extraBold-title-30 ml-4">{props.serwerData && props.serwerData.diagnosis_history[0].heart_rate.value} bpm</p>
                <p className="body-regular-14 ml-4 mb-4">{props.serwerData && props.serwerData.diagnosis_history[0].heart_rate.levels}</p>
            </div>
        </div>
    );
}

export default DiagnosisHistory