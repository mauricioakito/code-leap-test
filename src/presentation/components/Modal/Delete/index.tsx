import styles from './Delete.module.scss'
import { useStore } from '@/store/useStore'
import { deleteRequest } from './DeleteRequest'

export const Delete = () => {

  const {modalShow, setModalShow, selectedPostID, setPosts} = useStore()

  const handleDeletePost = async () => {
    await deleteRequest({postID: selectedPostID, setPosts, setModalShow})
  }

  return (
    <div className={styles.deleteModal}>
      <div className={styles.innerModalContainer}>
        <h1 className={styles.deleteModalTitle}>Are you sure you want to delete this item?</h1>
        <div className={styles.buttonContainer}>
          <button className={styles.modalButtonCancel} onClick={() => setModalShow({delete: !modalShow.delete})}>Cancel</button>
          <button className={styles.modalButtonDelete} onClick={() => handleDeletePost()}>Delete</button>
        </div>
      </div>
    </div>
  )
}

