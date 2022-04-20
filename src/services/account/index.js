import createAPIRequest from '../CreateAPIRequest';

export const login = (data) => {
  const result = createAPIRequest({
    url: '/auth/check_otp',
    method: 'POST',
    data,
  });
  return result;
};
