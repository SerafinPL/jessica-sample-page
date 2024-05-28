import Image from 'next/image';
import PatientIcoText from './PatientIcoText';

import FemaleIcon from "@public/FemaleIcon.svg";
import MaleIcon from "@public/MaleIcon.svg";
import PhoneIcon from "@public/PhoneIcon.svg";
import BirthIcon from "@public/BirthIcon.svg";


const PatientInfo = ({ user }) => {

    const gender = user.gender == 'Male' ? MaleIcon : FemaleIcon;  

    return (
        <div className="flex flex-col bg-white rounded-xl mb-6 h-[740px] ">

            <div className="pt-8 mx-auto	">
                {user && <Image src={user.profile_picture} width={200} height={200} className={``} />}
                {user && <p className="card-title-24pt text-center mt-6">{user.name}</p>}
            </div>
            <PatientIcoText ico={BirthIcon} textDown={user.date_of_birth} textUp={'Date Of Birth'}/>
            <PatientIcoText ico={user && gender} textDown={user.gender} textUp={'Gender'}/>
            <PatientIcoText ico={PhoneIcon} textDown={user.phone_number} textUp={'Contact Info.'}/>
            <PatientIcoText ico={PhoneIcon} textDown={user.emergency_contact} textUp={'Emergency Contacts'}/>
            <PatientIcoText ico={BirthIcon} textDown={user.insurance_type} textUp={'Insurance Provider'}/>
            <button type="button" class="py-3 px-4 my-8	mx74 rounded-full border border-transparent bg-thrRow-active ">
                <p className="text-center body-emphasized-14pt">Show All Information</p>
            </button>
        </div>
    )
};

export default PatientInfo