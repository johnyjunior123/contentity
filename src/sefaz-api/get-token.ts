import axios from "axios";

const baseUrl = `https://contribuinte.sefaz.al.gov.br/auth/authenticate`

type apiSefazToken = {
    id_token: string
}

export async function getTokenAPISefaz(username: string, password: string): Promise<apiSefazToken> {
    console.log(baseUrl)
    const res = await axios.post(baseUrl, {
        username,
        password,
        rememberMe: false
    })
    return res.data
}