import { Suspense } from "react";
import Loading from "../Loading";



import CardTitle from "@/components/CardTitle";
import DiagnosticListView from "./DiagnosticView";

const DiagnosticList = async (props) => {

    return (
        <div className="flex flex-col bg-white rounded-xl max-h-[300px] ">
            <CardTitle title='Diagnostic List'></CardTitle>
            <div className="">
                <div className={`w-full grid grid-cols-7 h-full p-4 pl-5 `}>
                    <div className={`col-span-2 `}>Problem/Diagnosis</div>
                    <div className={`col-span-3 `}>Description</div>
                    <div className={`col-span-1 `}>Description</div>
                </div>
                <Suspense fallback={<Loading />}>
                    <DiagnosticListView serwerData={props.serwerData && props.serwerData.diagnostic_list} />
                </Suspense>
            </div>
        </div>
    )
};

export default DiagnosticList