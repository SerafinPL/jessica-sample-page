'use server'

import axios from "axios";

import ArrowUp from "@public/ArrowUp.svg";
import ArrowDown from "@public/ArrowDown.svg";
import Image from 'next/image';



export const getPatients = async () => {

    let auth = btoa(`${process.env.USER_LOGIN}:${process.env.PASS}`);

    return axios.get(process.env.PATH_URL, { headers: { 'Authorization': `Basic ${auth}` } }).then(res => {
        return res.data;
    }, err => console.log(err))

}

export const getOnePatient = async (name) => {

    let auth = btoa(`${process.env.USER_LOGIN}:${process.env.PASS}`);

    return axios.get(process.env.PATH_URL, { headers: { 'Authorization': `Basic ${auth}` } }).then(res => {
        return res.data.find(patient => patient.name == name);
    }, err => console.log(err))

}

export const getArrow = (arrow) => {
    return arrow === 'Lower than Average' ?
        <Image src={ArrowDown} /> :
        arrow === 'Higher than Average' ?
            <Image src={ArrowUp} /> :
            '';
}