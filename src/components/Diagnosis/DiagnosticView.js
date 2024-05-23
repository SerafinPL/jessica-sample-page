'use client'

import Image from 'next/image';

import { Suspense } from "react";
import Loading from "../Loading";

import { getOnePatient } from '@/data/getData';

import more from "@public/more_horiz.svg";

const DiagnosticListView = ({ serwerData }) => {

    const listElements = serwerData.map(el => {
        return (<div className={`w-full grid grid-cols-7 h-full p-4 pl-5 `}>
            <div className={`col-span-2 `}>{el.name}</div>
            <div className={`col-span-3 `}> {el.description}</div>
            <div className={`col-span-1 `}> {el.status}</div>
        </div>)
    })

    return (
        <div className={`w-full h-full p-4 pl-5 overflow-y-auto [&::-webkit-scrollbar]:w-1.5
        [&::-webkit-scrollbar-track]:bg-firstRow-scrollFront
        [&::-webkit-scrollbar-track]:rounded-full
        [&::-webkit-scrollbar-thumb]:bg-firstRow-A5
        [&::-webkit-scrollbar-thumb]:rounded-full"`}>
            <div className={`w-full grid grid-cols-7 h-full p-4 pl-5 `}>
                <div className={`col-span-2 `}>Problem/Diagnosis</div>
                <div className={`col-span-3 `}>Description</div>
                <div className={`col-span-1 `}>Description</div>
            </div>
            {listElements}
        </div>
    )
};

export default DiagnosticListView