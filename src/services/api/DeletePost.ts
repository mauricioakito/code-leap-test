export const deletePost = async (postID: number) => {
  const response = await fetch(`${__BASE_URL__}${postID}/`, {
    method: 'DELETE',
    headers: {
      'Content-Type': 'application/json',
    },
  });

  return response
}