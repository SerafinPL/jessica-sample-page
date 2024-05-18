

import Image from 'next/image'; 

import more from "../../public/more_vert.svg";
import settings from "../../public/settings.svg";



const NavUSer = (props) => (
    <div className={`flex justify-center items-center`}>
        {props.userAvatar && <Image src={props.userAvatar} className={`w-11 h-11`} />}
        <div className={`border-r px-2 border-lastRow-borderGrey h-11`}>
            <p className="px-1 body-emphasized-14pt">{props.name}</p>
            <p className="px-1 body-secondary-info-14pt">{props.role}</p>
        </div>
        <Image src={settings} className={`mx-2`} />
        <Image src={more} className={`mx-2`} />
    </div>
);

export default NavUSer