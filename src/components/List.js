


import Image from 'next/image'; 

import more from "../../public/more_vert.svg";
import settings from "../../public/settings.svg";



const List = ({ico,title}) => (
    <div className={`flex justify-center items-center`}>
        <p>{title && title} {ico && <Image src={ico} />}</p>
    </div>
);

export default List