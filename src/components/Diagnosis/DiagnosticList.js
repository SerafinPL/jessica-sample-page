import { Suspense } from "react";
import Loading from "../Loading";

import CardTitle from "@/components/CardTitle";
import ListView from "./DiagnosticView";

const DiagnosticList = (props) => {

    return (
        <div className="flex flex-col bg-white rounded-xl max-h-[300px] overflow-y-hidden	 ">
            <div className="mt18">
                <CardTitle title='Diagnostic List'></CardTitle>
            </div>
            <div className="">
                <div className={` grid grid-cols-7 h-full mx-4 my-5 py-3.5 pl-5 bg-firstRow-A1 radius70 body-emphasized-14pt`}>
                    <div className={`col-span-2 `}>Problem/Diagnosis</div>
                    <div className={`col-span-3 `}>Description</div>
                    <div className={`col-span-1 `}>Status</div>
                </div>
                <Suspense fallback={<Loading />}>
                    <ListView serwerData={props.serwerData && props.serwerData.diagnostic_list} />
                </Suspense>
            </div>
        </div>
    )
};

export default DiagnosticList