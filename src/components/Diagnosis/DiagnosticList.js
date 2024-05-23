import { Suspense } from "react";
import Loading from "../Loading";

import { getOnePatient } from '@/data/getData';

import CardTitle from "@/components/CardTitle";
import DiagnosticListView from "./DiagnosticView";

const DiagnosticList = async () => {

    let serwerData = await getOnePatient('Jessica Taylor').then(res => {
        return res.diagnostic_list
    });
   
    return (
        <div class="flex flex-col bg-white rounded-xl ">
            <CardTitle title='Diagnostic List'></CardTitle>
            <div className="">
                <Suspense fallback={<Loading />}>
                    <DiagnosticListView serwerData={serwerData && serwerData}/>
                </Suspense>
            </div>
        </div>
    )
};

export default DiagnosticList