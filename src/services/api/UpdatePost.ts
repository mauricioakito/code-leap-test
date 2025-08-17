import type { IPostChangeProps } from "../../types/services";
import { fetchData } from "../../utils/fetchData"

export const UpdatePost = async (postID: number, data: IPostChangeProps) => {
  const response = await fetchData(`${__BASE_URL__}${postID}/`, {
    method: 'PATCH',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(data)
  });

  return response
}