import styles from './Scroller.module.scss';
import { Form } from '../Form';
import { Post } from '../Post';
import { useStore } from '@/store/useStore';
import { Loader } from '../Loader';
import Portal from '../Portal';
import { Modal } from '../Modal';

export const Scroller = () => {

  const {posts, modalShow} = useStore()

  return (
    <div className={styles.scroller}>
      <div className={styles.header}>
        <span className={styles.headerTitle}>CodeLeap Network</span>
      </div>
      <Form.CreateOrEdit requestType='create'/>

      {posts.length === 0 ? 
        <Loader message="Please wait while the posts are loaded..." /> :
        <div className={styles.postContainer}>
          {posts.map((item) => <Post key={item.id} item={item}/>)}
        </div>
      }

      {modalShow.edit && (
        <Portal>
          <div className='overlay'>
            <Modal.Edit />
          </div>
        </Portal>
      )}
      
      {modalShow.delete && (
        <Portal>
          <div className='overlay'>
            <Modal.Delete />
          </div>
        </Portal>
      )}

    </div>
  )
}
