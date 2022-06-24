import createAPIRequest from '../CreateAPIRequest';

export const getByScheduleId = scheduleId => {
  let query = '';
  query += scheduleId ? `scheduleId=${scheduleId}` : '';
  const result = createAPIRequest({
    url: `/ticket/?${query}`,
    method: 'GET',
  });
  return result;
};
export const holdTicket = (scheduleId, seats) => {
  const result = createAPIRequest({
    url: `/ticket/hold`,
    method: 'POST',
    data: {
      schedule_id: scheduleId,
      seats: seats,
    },
  });
  return result;
};
export const confirmTicket = scheduleId => {
  const result = createAPIRequest({
    url: `/ticket/confirm`,
    method: 'POST',
    data: {
      schedule_id: scheduleId,
    },
  });
  return result;
};
export const cancelTicket = scheduleId => {
  const result = createAPIRequest({
    url: `/ticket/cancel`,
    method: 'POST',
    data: {
      schedule_id: scheduleId,
    },
  });
  return result;
};
export const getTicket = () => {
  const result = createAPIRequest({
    url: `/user/tickets`,
    method: 'GET',
  });
  return result;
};
