import Image from 'next/image';
import NavButton from "./navButton";

import techLogo from "../../public/TestLogo.svg";
import homeIco from "../../public/home.svg";
import groupIco from "../../public/group.svg";
import creditIco from "../../public/credit.svg";
import chatIco from "../../public/chat.svg";
import calendarIco from "../../public/calendar.svg";


const NavBar = () =>
(<header class="flex flex-wrap lg:justify-start lg:flex-nowrap w-full bg-white text-sm py-4  radius70">
    <nav class="max-w-[85rem] w-full mx-auto px-4 flex flex-wrap basis-full items-center justify-between radius70" aria-label="Global">
        <Image src={techLogo} />
        <div class="lg:order-3 flex items-center gap-x-2">
            <button type="button" class="lg:hidden hs-collapse-toggle p-2.5 inline-flex justify-center items-center gap-x-2 rounded-lg border border-gray-200 bg-white text-gray-800 shadow-sm hover:bg-gray-50 disabled:opacity-50 disabled:pointer-events-none " data-hs-collapse="#navbar-alignment" aria-controls="navbar-alignment" aria-label="Toggle navigation">
                <svg class="hs-collapse-open:hidden flex-shrink-0 size-4" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><line x1="3" x2="21" y1="6" y2="6" /><line x1="3" x2="21" y1="12" y2="12" /><line x1="3" x2="21" y1="18" y2="18" /></svg>
                <svg class="hs-collapse-open:block hidden flex-shrink-0 size-4" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M18 6 6 18" /><path d="m6 6 12 12" /></svg>
            </button>
            <button type="button" class="py-2 px-3 inline-flex items-center gap-x-2 text-sm font-medium rounded-lg border border-gray-200 bg-white text-gray-800 shadow-sm hover:bg-gray-50 disabled:opacity-50 disabled:pointer-events-none ">
                Button
            </button>
        </div>
        <div id="navbar-alignment" class="hs-collapse hidden overflow-hidden transition-all duration-300 basis-full grow lg:grow-0 lg:basis-auto lg:block lg:order-2">
            <div class="flex flex-col gap-5 mt-5 lg:flex-row lg:items-center lg:mt-0 lg:ps-5">
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