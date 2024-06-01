
import { Suspense } from "react";
import Loading from "../Loading";

import CardTitle from "@/components/CardTitle";
import LabListView from "./LabResultsView";

const LabResults = () => (
        <div className="flex flex-col bg-white rounded-xl max-h-[300px] overflow-y-hidden	 ">
            <div className="mt18">
                <CardTitle title='Lab Results'></CardTitle>
            </div>
            <div className=" pt-2">            
                <Suspense fallback={<Loading />}>
                    <LabListView  />
                </Suspense>
            </div>
        </div>
    );

export default LabResults