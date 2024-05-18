import Image from 'next/image';

import more from "@public/more_horiz.svg";

const PatientListView = ({avatar, name, gender, age, active}) => (
    <div className={`w-full h-10 flex justify-between items-center h-20 p-4 pl-5 ${active ? 'bg-thrRow-active' : ''}`}>
        {avatar && <Image src={avatar} className={`w-11 h-10`} />}
        <div className={`w-full px-2  h-10`}>
            <p className="px-1 body-emphasized-14pt">{name && name}</p>
            <p className="px-1 body-secondary-info-14pt">{gender && gender}, {age && age}</p>
        </div>
        <Image src={more} className={``} />
    </div>
);

export default PatientListView