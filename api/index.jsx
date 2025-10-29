import axios from "axios";
import { API_LOGIN, API_PASSWORD } from '@env';

export async function getAllTrash() {
    try {
        const resp = await axios.get("https://sheetdb.io/api/v1/jlq7ps6sl6wal", {
            auth: {
                username: API_LOGIN,
                password: API_PASSWORD
            }
        });
        console.log(resp.data); 
        return resp.data;
    } catch (e) {
        return e;
    }
}

export async function getSingleTrash(data) {
    try {
        const resp = await axios.get("https://sheetdb.io/api/v1/jlq7ps6sl6wal/", {
            auth: {
                username: API_LOGIN,
                password: API_PASSWORD
            }
        });
        console.log(data)
        return resp.data;
    } catch (e) {
        return e;
    }
}

export async function postTrash(data) {
    try {
        const resp = await axios.post("https://sheetdb.io/api/v1/jlq7ps6sl6wal", {
            data: {
                ...data
            }
        }, {
            auth: {
                username: API_LOGIN,
                password: API_PASSWORD
            }
        });
        console.log(data)
        return resp.data;
    } catch (e) {
        return e;
    }
}
