
import { getOnePatient, getPatients } from '@/data/getData';

import PatientsList from "@/components/PatientsList/PatientsList";
import PatientInfo from '@/components/PatientInfo';
import DiagnosisHistory from "@/components/Diagnosis/DiagnosisHistory";
import DiagnosticList from "@/components/Diagnosis/DiagnosticList";
import LabResults from "@/components/LabResults";

const reavlidate = 1800;

export default async function Home() {

  let serwerData = await getOnePatient('Jessica Taylor').then(res => {
    return res
  });

  let serwerAllPatientsData = await getPatients().then(res => {
    console.log(res);
    return res
  });

  return (

    <div className="w-full grid grid-cols-4 gap-4 px18 radius70">
      <div className="mt18 row-span-full">
        <PatientsList serwerPatientsData={serwerPatientsData}/>
      </div>
      <div className="col-span-2 mt18">
        <DiagnosisHistory serwerData={serwerData} />
        <DiagnosticList serwerData={serwerData} />
      </div>
      <div className="">
        <PatientInfo user={serwerData}/>
        <LabResults  />
      </div>
    </div>
  );
}
