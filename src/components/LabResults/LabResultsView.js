
import { getOnePatient } from "@/data/getData";
import Image from 'next/image';
import BetterScrolls from "../BetterScrolls";
import download from "@public/download.svg";

const LabListView = async () => {

    let serwerData = await getOnePatient('Jessica Taylor').then(res => {
        return res.lab_results
    });

    const listElements = serwerData.map(el => {
        return (<div className={`w-full grid grid-cols-7 h-full pl-4 py-2 rounded-xl ${el === 'CT Scans' ? 'bg-firstRow-A1' : ''}`}>
            <div className={`col-span-5 `}>{el}</div>
            <div className={`col-span-2 flex justify-end pr-4 cursor-pointer `}>{<Image src={download} />}</div>
        </div>)
    })

    return (      
            <BetterScrolls classes={'`w-full pb-4 px-5 max-h-[263px]'}>
                {listElements}
            </BetterScrolls>
    )
};

export default LabListView