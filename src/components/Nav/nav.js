import Image from 'next/image';
import NavButton from "./navButton";
import NavUSer from './navUser';

import techLogo from "../../../public/TestLogo.svg";
import homeIco from "../../../public/home.svg";
import groupIco from "../../../public/group.svg";
import creditIco from "../../../public/credit.svg";
import chatIco from "../../../public/chat.svg";
import calendarIco from "../../../public/calendar.svg";

import drAvatar from "../../../public/senior-woman-doctor.png"


const NavBar = () =>
(<header className=" flex flex-wrap xl:justify-start xl:flex-nowrap items-center bg-white text-sm p-4 m18 h72 radius70">
    <nav className=" w-full flex flex-wrap basis-full items-center justify-between radius70" aria-label="Global">
        <Image src={techLogo} />
        <div className="xl:order-3 flex items-center gap-x-2">
            <button type="button" className="xl:hidden hs-collapse-toggle p-2.5 inline-flex justify-center items-center gap-x-2 rounded-lg border border-gray-200 bg-white text-gray-800 shadow-sm hover:bg-gray-50 disabled:opacity-50 disabled:pointer-events-none " data-hs-collapse="#navbar-alignment" aria-controls="navbar-alignment" aria-label="Toggle navigation">
                <svg className="hs-collapse-open:hidden flex-shrink-0 size-4" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><line x1="3" x2="21" y1="6" y2="6" /><line x1="3" x2="21" y1="12" y2="12" /><line x1="3" x2="21" y1="18" y2="18" /></svg>
                <svg className="hs-collapse-open:block hidden flex-shrink-0 size-4" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M18 6 6 18" /><path d="m6 6 12 12" /></svg>
            </button>
            <NavUSer userAvatar={drAvatar} name='Dr. Jose Simmons' role='General Practitioner'/>
        </div>
        <div id="navbar-alignment" className="hs-collapse hidden overflow-hidden transition-all duration-300 basis-full grow xl:grow-0 xl:basis-auto xl:block xl:order-2">
            <div className="flex flex-col gap-5 mt-5 xl:flex-row xl:items-center xl:mt-0 xl:ps-5">
                <NavButton ico={homeIco}>Overview</NavButton>
                <NavButton ico={groupIco} active>Patients</NavButton>
                <NavButton ico={calendarIco}>Schedule</NavButton>
                <NavButton ico={chatIco}>Message</NavButton>
                <NavButton ico={creditIco}>Transactions</NavButton>
            </div>
        </div>
    </nav>
</header>)

export default NavBar