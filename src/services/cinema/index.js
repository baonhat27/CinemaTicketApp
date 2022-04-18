import createAPIRequest from '../CreateAPIRequest';

export const getByFilmId = (filmId, cinemaId) => {
  var query = '';
  query += filmId ? `filmId=${filmId}` : '';
  query += cinemaId ? `&cinemaId=${cinemaId}` : '';
  const result = createAPIRequest({
    url: `/schedules?${query}`,
    method: 'GET',
  });
  return result;
};
