

import CardTitle from "@/components/CardTitle";
import PatientListView from "./PatientListView";
import search from "../../public/search.svg";
import { patients } from "@/data/Patients";

const PatientsList = (props) => {

    const viewElements = patients.map(el => (
        <PatientListView avatar={el.avatar} name={el.name} gender={el.gender} age={el.age} />
    ))

    const extendedElements = viewElements.concat(viewElements).concat(viewElements);

    return (
        <div className="flex flex-col bg-white rounded-xl  max-h-[1054px] ">
            <CardTitle ico={search} title='Patients'></CardTitle>
            <div className="overflow-y-auto [&::-webkit-scrollbar]:w-1.5
                [&::-webkit-scrollbar-track]:bg-firstRow-scrollFront
                [&::-webkit-scrollbar-track]:rounded-full
                [&::-webkit-scrollbar-thumb]:bg-firstRow-A5
                [&::-webkit-scrollbar-thumb]:rounded-full">
                {extendedElements}
            </div>
        </div>
    )
};

export default PatientsList