import axios from 'axios';

axios.defaults.baseURL = 'https://ab657a7a-b961-421a-8d3a-074fea6a3870.mock.pstmn.io/cdw/v3';


export async function getPatients() {
  const result = await axios({method: "get", url:`/patients?icns=minim%20sit`});
    return result.data;
}