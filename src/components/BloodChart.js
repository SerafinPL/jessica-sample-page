import { Suspense } from "react";

import Loading from './Loading';


import { getOnePatient } from '@/data/getData';
import PatientChart from "./Chart/Chart";

const BloodChart = async () => {

    let serwerData = await getOnePatient('Jessica Taylor').then(res => {
        return res
    });

    return (

        <Suspense fallback={<Loading />}>
            <PatientChart data={serwerData && serwerData} />
        </Suspense>
    )
};

export default BloodChart