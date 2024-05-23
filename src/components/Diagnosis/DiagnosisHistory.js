import { Suspense } from "react";

import CardTitle from "@/components/CardTitle";
import BloodChart from "../BloodChart";
import ChartLegend from "../Chart/ChartLegend";
import ChartCard from "../Chart/ChartCard";
import Loading from '../Loading';


const DiagnosisHistory = () => {
    return (
        <div className="w-full grid grid-cols-3 gap-4 px18 bg-white rounded-xl">

            <div className="mt18 col-span-full">
                <CardTitle title='Diagnosis History'></CardTitle>
            </div>
            <div className="mt18 col-span-full bg-secRow-fiolet rounded-xl">
            <p className="inner-card-title-22pt m-1">Blood Pressure</p>
                <div className={`w-full flex justify-center items-start `} >
                    <BloodChart />
                    <ChartLegend />
                </div>

            </div>
            <div className="">
            </div>
            <div className="">
            </div>
            <div className="">
            </div>

        </div>
    );
}

export default DiagnosisHistory