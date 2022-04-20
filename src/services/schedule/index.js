import createAPIRequest from "../CreateAPIRequest";

export const getById =  (filmId , cinemaId) => {
     let query = ""
     query += filmId ? `filmId=${filmId}` : ""
     query += cinemaId ? `&cinemaId=${cinemaId}` : ""
     console.log(query)
     const result = createAPIRequest({
          url:`/schedules?${query}`,
          method:'GET',
     })
     return result
}