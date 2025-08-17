import { Form } from '../../Form';
import styles from './Edit.module.scss';

export const Edit = () => {
  return (
    <div className={styles.modalEdit}>
      <Form.CreateOrEdit requestType='edit' />
    </div>
  )
}
