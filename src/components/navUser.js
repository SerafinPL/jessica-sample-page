

import Image from 'next/image'; settings

import more from "../../public/more_vert.svg";
import settings from "../../public/settings.svg";



const NavUSer = (props) => (
    <div className={` flex	justify-center items-center	`}>
        {props.userAvatar && <Image src={props.userAvatar} className={`w-10 h-10`} />}
        <div className={` border-r px-2 border-lastRow-borderGrey`}>
            <p className="px-1">{props.name}</p>
            <p className="px-1">{props.role}</p>
        </div>
        <Image src={settings} className={`mx-2`} />
        <Image src={more} className={`mx-2`} />
    </div>
);

export default NavUSer