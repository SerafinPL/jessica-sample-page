
import { Suspense } from "react";
import Loading from "./Loading";
import { getOnePatient } from "@/data/getData";


import CardTitle from "@/components/CardTitle";
import LabListView from "./LabResultsView";

const LabResults = async () => {

    let lastDiagnosis = await getOnePatient('Jessica Taylor').then(res => {
        console.log(res)
        return res
    });

    return (
        <div className="flex flex-col bg-white rounded-xl max-h-[300px] overflow-y-hidden	 ">
            <div className="mt18">
                <CardTitle title='Lab Results'></CardTitle>
            </div>
            <div className=" pt-2">
            
                <Suspense fallback={<Loading />}>
                    <LabListView serwerData={lastDiagnosis.lab_results} />
                </Suspense>
            </div>
        </div>
    )
};

export default LabResults