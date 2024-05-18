import Image from "next/image";

import PatientsList from "@/components/PatientsList";


export default function Home() {
  return (


    <div className="w-full grid grid-cols-4 gap-4 px18 radius70">
      <div className="mt18">
        <PatientsList />
      </div>
      <div className="col-span-2 mt18">
        <PatientsList />
      </div>
      <div className="">
        <PatientsList />
      </div>
    </div>
  );
}
