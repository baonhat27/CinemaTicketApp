import axios from 'axios';

const HOST_URL = 'https://film-tickie.herokuapp.com/api/v1';

export default async function createAPIRequest({url,method,params,data}) {
  try {
          const result = await axios({
            method,
            url: `${HOST_URL}${url}`,
            data,
            params,
            withCredentials: true,
          });
          return {
            success: true,
            data: result.data,
          };
        } catch (e) {
          const { response } = e;
          return {
            success: false,
            data: response,
          };
        }
}