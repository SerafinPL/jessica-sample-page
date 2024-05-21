

import Image from 'next/image';
import Loading from './Loading';

import { getPatients, getOnePatient } from '@/data/getData';
import PatientChart from './Chart';

const BloodChart = async () => {

    let serwerData = await getOnePatient('Jessica Taylor').then(res => {
        console.log(res)
        return res
    });

        console.log(serwerData);

    return (
        <div className={`w-full flex justify-center items-center `} >
            <div class="flex justify-center sm:justify-end items-center gap-x-4 mb-3 sm:mb-6">
                <div class="inline-flex items-center">
                    <span class="size-2.5 inline-block bg-blue-600 rounded-sm me-2"></span>
                    <span class="text-[13px] text-gray-600 dark:text-neutral-400">
                        Income
                    </span>
                </div>
                <div class="inline-flex items-center">
                    <span class="size-2.5 inline-block bg-cyan-500 rounded-sm me-2"></span>
                    <span class="text-[13px] text-gray-600 dark:text-neutral-400">
                        Outcome
                    </span>
                </div>
                <div class="inline-flex items-center">
                    <span class="size-2.5 inline-block bg-gray-300 rounded-sm me-2 dark:bg-neutral-700"></span>
                    <span class="text-[13px] text-gray-600 dark:text-neutral-400">
                        Others
                    </span>
                </div>
            </div>
            <PatientChart />
            <button type="button" className="py-3 px-4 inline-flex items-center gap-x-2 text-sm font-semibold rounded-lg border border-transparent bg-blue-600 text-white hover:bg-blue-700 disabled:opacity-50 disabled:pointer-events-none"></button>
        </div>
    )
};

export default BloodChart