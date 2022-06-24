import createAPIRequest from '../CreateAPIRequest';

export const getUserInfo = () => {
  const result = createAPIRequest({
    url: `/user`,
    method: 'GET',
  });
  return result;
};
export const editInfo = data => {
  const result = createAPIRequest({
    url: `/user`,
    method: 'POST',
    data,
  });
  return result;
};
