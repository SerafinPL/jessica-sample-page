import Image from 'next/image';


const NavButton = (props) => (
    <button
        className={`text-firstRow-A5 p-3 ${props.active ? 'bg-thrRow-active' : ''} flex flex-nowrap basis-full items-center justify-center rounded-full h-11`}>
        {props.ico && <Image src={props.ico} />}
        <span className="px-2">{props.children}</span>
    </button>
);

export default NavButton

//?? aria-current="page"