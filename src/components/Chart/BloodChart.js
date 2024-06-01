import { Suspense } from "react";
import { getOnePatient} from '@/data/getData';

import Loading from '../Loading';
import PatientChart from "./Chart";

const BloodChart = async () => {

     let serwerData = await getOnePatient('Jessica Taylor');

    return (
        <Suspense fallback={<Loading />}>
            <PatientChart data={serwerData} />
        </Suspense>
    )
};

export default BloodChart