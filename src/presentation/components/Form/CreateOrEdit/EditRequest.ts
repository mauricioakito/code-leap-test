import { ReadPosts } from "@/services/api/ReadPosts"
import { UpdatePost } from "@/services/api/UpdatePost"
import type { IPostState } from "@/types/app"

interface IEditRequestProps {
  postID: number
  data: {
    title: string
    content: string
  }
  setPosts: (data: IPostState[]) => void
  setModalShow: (data: Partial<{
    delete: boolean;
    edit: boolean;
}>) => void
}

export const editRequest = async ({postID, data, setPosts, setModalShow}: IEditRequestProps) => {
  
  const editPost = await UpdatePost(postID, data)

    if (editPost.status >= 400 && editPost.status < 500) {
      return alert('Error, bad response')
    }

    if (editPost.status >= 500 && editPost.status < 600) {
      return alert('Server error')
    }

    if (editPost.status >= 200 && editPost.status < 300) {
      await ReadPosts().then(response => setPosts(response));
      setModalShow({edit: false})
    }
}