import Image from 'next/image';

const NavButton = ({active, ico, children }) => (
    <button
        className={`text-firstRow-A5 p-3 ${active ? 'bg-thrRow-active' : ''} flex flex-nowrap basis-full items-center justify-center rounded-full h-11`}>
        {ico && <Image src={ico} />}
        <span className="px-2">{children}</span>
    </button>
);

export default NavButton

