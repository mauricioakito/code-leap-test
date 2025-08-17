import styles from "./Post.module.scss";
import { TbTrashX } from "react-icons/tb";
import { FaRegEdit } from "react-icons/fa";
import type { IPostState } from "@/types/app";
import { convertTimestampToReadableDate } from "@/utils/convertTimestamp";
import { useStore } from "@/store/useStore";

export const Post = ({ item }: { item: IPostState }) => {
  const { id, created_datetime, title, content } = item;
  const { username, setSelectedPostID, modalShow, setModalShow, setSelectedPostData } = useStore();

  const handleDelete = (id: number) => {
    setSelectedPostID(id);
    setModalShow({ delete: !modalShow.delete });
  };

  const handleEdit = (id: number) => {
    setSelectedPostID(id);
    setModalShow({ edit: !modalShow.edit });
    setSelectedPostData({title, content})
  };

  return (
    <div className={styles.post}>
      <div className={styles.postHeader}>
        <span>{title}</span>
        <div className={styles.iconContainer}>
          {username.toLowerCase() === item.username.toLowerCase() && (
            <>
              <button
                className={styles.postButton}
                onClick={() => handleDelete(id)}
              >
                <TbTrashX color="#fff" className={styles.buttonIcon} />
              </button>
              <button
                className={styles.postButton}
                onClick={() => handleEdit(id)}
              >
                <FaRegEdit color="#fff" className={styles.buttonIcon} />
              </button>
            </>
          )}
        </div>
      </div>
      <div className={styles.postBody}>
        <div className={styles.infoLine}>
          <span className={styles.username}>@{item.username}</span>
          <span className={styles.timestamp}>
            {convertTimestampToReadableDate(created_datetime)}
          </span>
        </div>
        <div>
          <p className={styles.postContentText}>{content}</p>
        </div>
      </div>
    </div>
  );
};
