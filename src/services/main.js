import { instanceAxios } from "config";

export const get = (params) => {
  return instanceAxios
    .get("/path", {
      params: {
        ...params,
      },
    })
    .catch((error) => ({ error }));
};
