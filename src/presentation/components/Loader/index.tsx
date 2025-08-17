import styles from './Loader.module.scss'

export const Loader = ({message}: {message: string}) => {
  return (
    <div className={styles.loader}>
      <img className={styles.loaderGif} src='/loading.gif'/>
      <p className={styles.loaderMessage}>{message}</p>
    </div>
  )
}
