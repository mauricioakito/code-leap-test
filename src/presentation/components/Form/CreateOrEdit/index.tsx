import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import styles from "./Create.module.scss";
import classNames from "classnames";
import { useStore } from "@/store/useStore";
import { createRequest } from "./CreateRequest";
import { editRequest } from "./EditRequest";

const schema = z.object({
  title: z.string().min(1, "Name must have at least 1 character"),
  content: z.string().min(1, "Content must have at least 1 character"),
});

type FormData = z.infer<typeof schema>;

type IRequestType = "create" | "edit";

export const CreateOrEdit = ({
  requestType,
}: {
  requestType: IRequestType;
}) => {

  const isCreateType = requestType === 'create'
  const isEditType = requestType === 'edit'

  const { username, setPosts, setModalShow, selectedPostID, selectedPostData } = useStore();

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isValid },
    watch,
  } = useForm<FormData>({
    resolver: zodResolver(schema),
    mode: "onChange",
  });

  watch();

  const onSubmit = async (data: FormData) => {
    if (isCreateType) {
      await createRequest({ username, data, setPosts, reset });
    }
    if (isEditType) {
      await editRequest({ postID: selectedPostID, data, setPosts, setModalShow })
    }
  };

  return (
    <div className={styles.createForm}>
      <h1 className={styles.formTitle}>{isCreateType ? "What's on your mind?" : "Edit Item"}</h1>
      <form className={styles.form} onSubmit={handleSubmit(onSubmit)}>
        <div className={styles.inputContainer}>
          <label className={styles.label} htmlFor="title">
            Title
          </label>
          <input
            className={styles.inputfield}
            {...register("title")}
            placeholder="John doe"
            defaultValue={isEditType ? selectedPostData.title : ''}
          />
          {errors.title && (
            <p className={styles.errorMessage}>{errors.title.message}</p>
          )}
        </div>
        <div className={styles.inputContainer}>
          <label className={styles.label} htmlFor="content">
            Content
          </label>
          <textarea
            rows={5}
            defaultValue={isEditType ? selectedPostData.content : ''}
            className={styles.inputfield}
            {...register("content")}
            placeholder="Content"
          />
          {errors.content && (
            <p className={styles.errorMessage}>{errors.content.message}</p>
          )}
        </div>
        {isCreateType && (
          <button
            type="submit"
            disabled={!isValid}
            className={classNames(styles.buttonSubmit, {
              [styles.disabledButton]: !isValid,
            })}
          >
            Create
          </button>
        )}
        {isEditType && (
          <div className={styles.buttonEditContainer}>
            <button
              type="submit"
              onClick={() => setModalShow({edit: false})}
              className={styles.buttonCancelSubmit}
            >
              Cancel
            </button>
            <button
              type="submit"
              disabled={!isValid}
              className={classNames(styles.buttonSubmit, styles.buttonSaveSubmit, {
                [styles.disabledButton]: !isValid,
              })}
            >
              Save
            </button>
          </div>
        )}
      </form>
    </div>
  );
};
