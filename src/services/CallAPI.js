import axios from 'axios';
const HOST_URL = 'https://film-tickie.herokuapp.com';

const GET_FILM_URL = `${HOST_URL}/api/v1/films`;

export const getFilmByCategory = async cate => {
  const response = await axios.request({
    url: `${GET_FILM_URL}/${cate}`,
    method: 'get',
  });
  return response;
};
