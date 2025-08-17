import { deletePost } from "@/services/api/DeletePost"
import { ReadPosts } from "@/services/api/ReadPosts"
import type { IPostState } from "@/types/app"

interface IEditRequestProps {
  postID: number
  setPosts: (data: IPostState[]) => void
  setModalShow: (data: Partial<{
    delete: boolean;
    edit: boolean;
}>) => void
}

export const deleteRequest = async ({postID, setPosts, setModalShow}: IEditRequestProps) => {
  
    const excludePost = await deletePost(postID)

    if (excludePost.status >= 400 && excludePost.status < 500) {
      return alert('Error, bad response')
    }

    if (excludePost.status >= 500 && excludePost.status < 600) {
      return alert('Server error')
    }

    if (excludePost.status >= 200 && excludePost.status < 300) {
      await ReadPosts().then(response => setPosts(response));
      setModalShow({delete: false})
    }
}