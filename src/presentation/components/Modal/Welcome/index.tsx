import styles from "@/presentation/styles/Form.module.scss";
import { useStore } from "@/store/useStore";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { Button } from "../../Button";

const schema = z.object({
  username: z.string().min(3, "Name must have at least 3 characters"),
});

type FormData = z.infer<typeof schema>;

export const Welcome = () => {
  const {setUsername} = useStore()

  const {
    register,
    handleSubmit,
    formState: { errors, isValid },
    watch
  } = useForm<FormData>({
    resolver: zodResolver(schema),
    mode: 'onSubmit'
  });

  watch();

  const onSubmit = (data: FormData) => {
    setUsername(data.username)
  };

  return (
    <div className={styles.modal}>
      <h1 className={styles.title}>Welcome to CodeLeap network!</h1>
      <form className={styles.form} onSubmit={handleSubmit(onSubmit)}>
        <div className={styles.inputContainer}>
          <label className={styles.label} htmlFor="username">
            Please enter your username
          </label>
          <input
            className={styles.inputfield}
            {...register("username")}
            placeholder="John doe"
          />
          {errors.username && (
            <p className={styles.errorMessage}>{errors.username.message}</p>
          )}
        </div>
        <Button.CTA tagName="button" text="Enter" type="submit" disabled={!isValid} variation="primary"/>
      </form>
    </div>
  );
};
