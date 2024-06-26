import { Suspense } from "react";

import Loading from '../Loading';
import ChartCard from "./ChartCard";

const ChartLegend = () => (
        <div className={`w-full  flex flex-col justify-start items-start max-w-[200px] mx-auto `} >
            <div>
                <div className="inline-flex  items-center">
                    <span className="size-2 inline-block bg-thrRow-chartBlue rounded-full me-2"></span>
                    <span className="body-emphasized-14pt m-2">Systolic </span>
                </div>
                <Suspense fallback={<Loading />}>
                    <ChartCard title='Systolic' />
                </Suspense>
            </div>
            <hr className="border-secRow-chartGrey w-full m-2" />
            <div>
                <div className="inline-flex  items-center">
                    <span className="size-2 inline-block bg-thrRow-chartPink rounded-full me-2"></span>
                    <span className="body-emphasized-14pt m-1">Diastolic </span>
                </div>
                <Suspense fallback={<Loading />}>
                    <ChartCard title='Diastolic' />
                </Suspense>
            </div>
        </div>
    );

export default ChartLegend