
import { getOnePatient, getPatients } from '@/data/getData';

import PatientsList from "@/components/PatientsList/PatientsList";
import PatientInfo from '@/components/PatientInfo/PatientInfo';
import DiagnosisHistory from "@/components/Diagnosis/DiagnosisHistory";
import DiagnosticList from "@/components/Diagnosis/DiagnosticList";
import LabResults from "@/components/LabResults/LabResults";


export default async function Home() {

  return (

    <div className="w-full grid grid-cols-4 gap-4 px18 radius70">
      <div className="mt18 row-span-full">
        <PatientsList />
      </div>
      <div className="col-span-2 mt18">
        <DiagnosisHistory  />
        <DiagnosticList  />
      </div>
      <div className="">
        <PatientInfo />
        <LabResults  />
      </div>
    </div>
  );
}
