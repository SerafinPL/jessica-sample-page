import { Suspense } from "react";

import CardTitle from "@/components/CardTitle";
import BloodChart from "./BloodChart";
import Loading from './Loading';


const DiagnosisHistory = () => {
    return (
        <div className="w-full grid grid-cols-3 gap-4 px18 bg-white rounded-xl">

            <div className="mt18 col-span-full">
                <CardTitle title='Diagnosis History'></CardTitle>
            </div>
            <div className="mt18 col-span-full ">
                <Suspense fallback={<Loading />}>
                    <BloodChart />
                </Suspense>

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