import { Suspense } from "react";

import Loading from '../Loading';

import PatientChart from "./Chart";

const BloodChart = async (props) => {

    return (
        <Suspense fallback={<Loading />}>
            <PatientChart data={props.serwerData && props.serwerData} />
        </Suspense>
    )
};

export default BloodChart