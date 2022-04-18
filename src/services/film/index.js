import createAPIRequest from "../CreateAPIRequest";

export const getByCate = (cate) => {
     const result = createAPIRequest({
          url:`/films/${cate}`,
          method:'GET',
     })
     return result
}
export const getById = (id) => {
     const result = createAPIRequest({
          url:`/film/${id}`,
          method:'GET',
     })
     return result
}