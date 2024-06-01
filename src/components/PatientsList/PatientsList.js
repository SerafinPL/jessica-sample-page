
import { getPatients } from '@/data/getData';

import CardTitle from "@/components/CardTitle";
import PatientListView from "./PatientListView";
import BetterScrolls from '../BetterScrolls';
import search from "@public/search.svg";

const PatientsList = async () => {

    const viewElements = await getPatients().then(res => {
        return res.map(el => (
            <PatientListView avatar={el.profile_picture} name={el.name} gender={el.gender} age={el.age} active={el.name == 'Jessica Taylor'} />
        ))
    })

    return (
        <div className="flex flex-col bg-white rounded-xl  max-h-[1054px] ">
            <CardTitle ico={search} title='Patients'></CardTitle>
            <BetterScrolls >
                {viewElements}
            </BetterScrolls>
        </div>
    )
};

export default PatientsList