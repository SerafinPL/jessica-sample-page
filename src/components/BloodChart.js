

import Image from 'next/image';
import Loading from './Loading';

import { getJesica } from '@/data/getData';

const BloodChart = async () => {

    let serwerData = await getJesica().then(res => {
        console.log(res)
        return res
    });

    console.log(serwerData);

    return (
        <div className={`w-full flex justify-center items-center `} >
            <button type="button" className="py-3 px-4 inline-flex items-center gap-x-2 text-sm font-semibold rounded-lg border border-transparent bg-blue-600 text-white hover:bg-blue-700 disabled:opacity-50 disabled:pointer-events-none"></button>
        </div>
    )
};

export default BloodChart