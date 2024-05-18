import Image from 'next/image';

import more from "../../public/more_horiz.svg";

const Patient = ({avatar, name, gender, age}) => (
    <div className={`flex justify-center items-center`}>
        {avatar && <Image src={avatar} className={`w-11 h-11`} />}
        <div className={`border-r px-2 border-lastRow-borderGrey h-11`}>
            <p className="px-1 body-emphasized-14pt">{name && name}</p>
            <p className="px-1 body-secondary-info-14pt">{gender && gender}, {age && age}</p>
        </div>
        <Image src={more} className={`mx-2`} />
    </div>
);

export default Patient