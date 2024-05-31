'use client'

import Image from 'next/image';

import download from "@public/download.svg";


const LabListView = ({ serwerData }) => {
    // console.log({ serwerData });

    const listElements = serwerData.map(el => {
        return (<div className={`w-full grid grid-cols-7 h-full pl-4 py-2 rounded-xl ${el === 'CT Scans' ? 'bg-firstRow-A1' :''}`}>
            <div className={`col-span-5 `}>{el}</div>
            <div className={`col-span-2 flex justify-end pr-4 cursor-not-allowed `}>{<Image src={download} className={``} />}</div>   
        </div>)
    })

    const biggerList = listElements.concat(listElements)

    return (
        <div className={`w-full pb-4 pl-5 overflow-y-auto [&::-webkit-scrollbar]:w-1.5 max-h-[259px] 
        [&::-webkit-scrollbar-track]:bg-firstRow-scrollFront
        [&::-webkit-scrollbar-track]:rounded-full
        [&::-webkit-scrollbar-thumb]:bg-firstRow-A5
        [&::-webkit-scrollbar-thumb]:rounded-full"`}>
     
            {biggerList}
        </div>
    )
};

export default LabListView