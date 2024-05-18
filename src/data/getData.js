'use server'

import axios from "axios";


export const getJesica = async () => {

    let auth = btoa(`${process.env.USER_LOGIN}:${process.env.PASS}`);

    return axios.get(process.env.PATH_URL,{headers:{'Authorization': `Basic ${auth}`}}).then(res => {
        return res
    }, err => console.log(err))

}