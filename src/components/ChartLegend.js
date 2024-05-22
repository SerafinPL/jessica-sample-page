
import { Suspense } from "react";

import Loading from './Loading';
import { getOnePatient } from '@/data/getData';


import ChartCard from "./ChartCard";

const ChartLegend = async (props) => {


    let lastDiagnosis = await getOnePatient('Jessica Taylor').then(res => {
        console.log(res)
        return res.diagnosis_history[0]
    });


    return (
        <div className={`w-full flex  justify-center items-center `} >

            <div>
                <div className="inline-flex items-center">
                    <span className="size-2 inline-block bg-thrRow-chartBlue rounded-full me-2"></span>
                    <span className="text-gray-600 dark:text-neutral-400"> Systolic </span>
                    <Suspense fallback={<Loading />}>
                        <ChartCard title='Systolic' lastDiagnosis={lastDiagnosis} />
                    </Suspense>
                </div>
            </div>
            <div>
                <div className="inline-flex items-center">
                    <span className="size-2 inline-block bg-thrRow-chartPink rounded-full me-2"></span>
                    <span className="text-gray-600 dark:text-neutral-400"> Diastolic </span>
                    <Suspense fallback={<Loading />}>
                        <ChartCard title='Diastolic' lastDiagnosis={lastDiagnosis} />
                    </Suspense>
                </div>
            </div>
        </div>
    )
};

export default ChartLegend