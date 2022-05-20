import createAPIRequest from "../CreateAPIRequest";

export const getById =  (filmId , cinemaId, date) => {
     let query = ""
     query += filmId ? `filmId=${filmId}` : ""
     query += cinemaId ? `&cinemaId=${cinemaId}` : ""
     query += date ? `&onDate=${date}` : ""
     const result = createAPIRequest({
          url:`/schedules?${query}`,
          method:'GET',
     })
     return result
}