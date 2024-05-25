import Image from 'next/image';
import PatientIcoText from './PatientIcoText';
import BirthIcon from "@public/BirthIcon.svg";


const PatientInfo = ({ user }) => {

    return (
        <div className="flex flex-col bg-white rounded-xl  h-[740px] ">

            <div className="pt-8 mx-auto	">
                {user && <Image src={user.profile_picture} width={200} height={200} className={``} />}
                {user && <p className="card-title-24pt text-center mt-6">{user.name}</p>}
            </div>
            <PatientIcoText ico={BirthIcon} textDown={'data'} textUp={'name'}/>
        </div>
    )
};

export default PatientInfo