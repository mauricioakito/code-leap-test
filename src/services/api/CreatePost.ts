import type { IPostCreationProps } from "../../types/services";
import { fetchData } from "../../utils/fetchData"

export const CreatePost = async (data: IPostCreationProps) => {
  const response = await fetchData(__BASE_URL__, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(data)
  });

  return response
}