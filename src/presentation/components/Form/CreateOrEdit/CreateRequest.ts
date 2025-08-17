import { CreatePost } from "@/services/api/CreatePost"
import { ReadPosts } from "@/services/api/ReadPosts"
import type { IPostState } from "@/types/app"
import type { UseFormReset } from "react-hook-form"

interface ICreateRequestProps {
  username: string
  data: {
    title: string
    content: string
  }
  setPosts: (data: IPostState[]) => void
  reset: UseFormReset<{
    title: string;
    content: string;
}>
}

export const createRequest = async ({username, data, setPosts, reset}: ICreateRequestProps) => {
  
  const createPost = await CreatePost({
      username,
      title: data.title,
      content: data.content
    })

    if (createPost.status >= 400 && createPost.status < 500) {
      return alert('Error, bad response')
    }

    if (createPost.status >= 500 && createPost.status < 600) {
      return alert('Server error')
    }

    if (createPost.status >= 200 && createPost.status < 300) {
      ReadPosts().then(response => setPosts(response));
      reset()
    }
}