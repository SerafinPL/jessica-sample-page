import { Suspense } from "react";
import Loading from "../Loading";



import CardTitle from "@/components/CardTitle";
import DiagnosticListView from "./DiagnosticView";

const DiagnosticList = async (props) => {
  
    return (
        <div class="flex flex-col bg-white rounded-xl ">
            <CardTitle title='Diagnostic List'></CardTitle>
            <div className="">
                <Suspense fallback={<Loading />}>
                    <DiagnosticListView serwerData={props.serwerData && props.serwerData.diagnostic_list}/>
                </Suspense>
            </div>
        </div>
    )
};

export default DiagnosticList