import { fetchData } from "../../utils/fetchData"
import { _Maybe } from 'funcio';

export const ReadPosts = async () => {
  const response = await fetchData(__BASE_URL__, {});
  
  const posts = _Maybe.of(response)
  .map(response => response.data)
  .map(data => data.results)
  .getOrElse([])

  return posts
}