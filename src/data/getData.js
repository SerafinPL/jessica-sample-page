
import axios from "axios";


export const getPatients = async () => {

    let auth = btoa(`${process.env.USER_LOGIN}:${process.env.PASS}`);

    return await axios.get(process.env.PATH_URL, { headers: { 'Authorization': `Basic ${auth}` } }).then(res => {
        return res.data;
    }, err => console.log(err))

}

export const getOnePatient = async (name) => {

    let auth = btoa(`${process.env.USER_LOGIN}:${process.env.PASS}`);

    return await axios.get(process.env.PATH_URL, { headers: { 'Authorization': `Basic ${auth}` } }).then(res => {
        return res.data.find(patient => patient.name == name);
    }, err => console.log(err))

}
