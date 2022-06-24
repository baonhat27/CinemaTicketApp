import axios from 'axios';

const HOST_URL = 'https://film-tickie.herokuapp.com/api/v1';
const token = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJQaG9uZSI6IjA5NzQ2MDY0MTMifQ.6tYFPgBrgi1NnSjtRSQ8i4nxHnSufKUAkjzUy2zhNqg"
export default async function createAPIRequest({
  url,
  method,
  params,
  data,
}) {
  try {
    const result = await axios({
      method,
      url: `${HOST_URL}${url}`,
      data,
      params,
      headers: {
        Authorization: token,
      },
      withCredentials: true,
    });
    return {
      success: true,
      data: result.data,
    };
  } catch (e) {
    const {response} = e;
    return {
      success: false,
      data: response,
    };
  }
}
