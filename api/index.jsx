import axios from "axios";
export function getAllTrash() {
    axios.get("https://sheetdb.io/api/v1/jlq7ps6sl6wal",
        {
            "auth": {
                "username": `${process.env.api_login}`,
                "password": `${process.env.api_password}`
            }
        }
    )
}

export function getSingleTrash(data) {
    axios.get("https://sheetdb.io/api/v1/jlq7ps6sl6wal",
        {

        },
        {
            "auth": {
                "username": `${process.env.api_login}`,
                "password": `${process.env.api_password}`
            }
        }
    )
}

export function postTrash(data) {
    axios.post("https://sheetdb.io/api/v1/jlq7ps6sl6wal",
        {
            "data":{
                ...data
            }
        },
        {
            "auth": {
                "username": `${process.env.api_login}`,
                "password": `${process.env.api_password}`
            }
        }
    )
}