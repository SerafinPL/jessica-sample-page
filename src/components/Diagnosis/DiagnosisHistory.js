import { Suspense } from "react";

import CardTitle from "@/components/CardTitle";
import BloodChart from "../BloodChart";
import ChartLegend from "../Chart/ChartLegend";
import ChartCard from "../Chart/ChartCard";
import Loading from '../Loading';


const DiagnosisHistory = async () => {
    return (
        <div className="w-full grid grid-cols-3 gap-4 px18 bg-white rounded-xl mb-8">

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
            <div className="grid grid-cols-3">
                <div className="rounded-xl bg-secRow-cardBlue">

                </div>
                <div className="rounded-xl bg-secRow-cardPink">

                </div>
                <div className="rounded-xl bg-secRow-cardViolet">

                </div>
            </div>
        </div>
    );
}

export default DiagnosisHistory