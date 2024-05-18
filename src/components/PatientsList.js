

import CardTitle from "@/components/CardTitle";
import search from "../../public/search.svg";

const PatientsList = (props) => (
    <div class="flex flex-col bg-white shadow-sm rounded-xl p-4 md:p-5 ">
        <CardTitle ico={search} title='Patients'></CardTitle>
    </div>
);

export default PatientsList