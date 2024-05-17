import Image from 'next/image';


const NavButton = (props) => (
    <button
        className={`text-firstRow-A5 p-3 ${props.active ? 'bg-thrRow-active' : ''} flex flex-nowrap basis-full items-center justify-center rounded-full `}>
        {props.ico && <Image src={props.ico} />}
        {props.children}
    </button>
);

export default NavButton

//?? aria-current="page"