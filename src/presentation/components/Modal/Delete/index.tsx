import styles from './Delete.module.scss'
import { useStore } from '@/store/useStore'
import { deleteRequest } from './DeleteRequest'
import { Button } from '../../Button'

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
          <Button.CTA tagName="button" text="Cancel" onClick={() => setModalShow({delete: !modalShow.delete})} variation="back"/>
          <Button.CTA tagName="button" text="Delete" onClick={() => handleDeletePost()} variation="cancel"/>
        </div>
      </div>
    </div>
  )
}

