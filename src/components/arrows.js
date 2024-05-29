'use client'

import ArrowUp from "@public/ArrowUp.svg";
import ArrowDown from "@public/ArrowDown.svg";
import Image from 'next/image';

export const getArrow = (arrow) => {
    return arrow === 'Lower than Average' ?
        <Image src={ArrowDown} /> :
        arrow === 'Higher than Average' ?
            <Image src={ArrowUp} /> :
            '';
}