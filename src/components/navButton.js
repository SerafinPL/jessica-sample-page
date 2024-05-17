import Image from 'next/image';


const NavButton = (props) => (
    <button
        className={`text-firstRow-A5 p-3 ${props.active ? 'bg-thrRow-active' : ''} flex flex-nowrap basis-full items-center justify-center rounded-full `}>
        {props.ico && <Image src={props.ico} />}
        <span className="px-1">{props.children}</span>
    </button>
);

export default NavButton

//?? aria-current="page"