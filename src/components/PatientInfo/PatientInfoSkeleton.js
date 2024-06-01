'use client'

import PatientIcoText from './PatientIcoText';
import PhoneIcon from "@public/PhoneIcon.svg";
import BirthIcon from "@public/BirthIcon.svg";

const PatientInfoSkeleton = () => (
    <div className="flex flex-col bg-white rounded-xl mb-6 h-[740px]">
        <div className="pt-8 mx-auto">
            {<div className={`w-[200px] h-[200px]`}></div>}
            {<p className="card-title-24pt text-center mt-6">{' '}</p>}
        </div>

        <PatientIcoText ico={BirthIcon} textUp={'Date Of Birth'} />
        <PatientIcoText textUp={'Gender'} />
        <PatientIcoText ico={PhoneIcon} textUp={'Contact Info.'} />
        <PatientIcoText ico={PhoneIcon} textUp={'Emergency Contacts'} />
        <PatientIcoText ico={BirthIcon} textUp={'Insurance Provider'} />
        <button type="button" class="py-3 px-4 my-8	mx74 rounded-full border border-transparent bg-thrRow-active">
            <p className="text-center body-emphasized-14pt">Loading...</p>
        </button>
    </div>
);

export default PatientInfoSkeleton