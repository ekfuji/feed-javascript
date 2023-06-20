import styles from "./Post.module.css";
import { Comment } from "./Comment";
import { Avatar } from "./Avatar";

export function Post() {
  return (
    <article className={styles.post}>
      <header>
        <div className={styles.author}>
          <Avatar
            src="https://github.com/pv-estefanifujimoto.png"
          />
          <div className={styles.authorInfo}>
            <strong className={styles.authorName}>Estefani Fujimoto</strong>
            <span className={styles.authorOccupation}>Web Developer</span>
          </div>
        </div>
        <time title="17 de abril às 21h32" dateTime="2023-04-17 21:32">
          Publicado há 1h
        </time>
      </header>
      <div className={styles.content}>
        <p>Fala galeraa 👋</p>

        <p>
          Acabei de subir mais um projeto no meu portifa. É um projeto que fiz
          no NLW Return, evento da Rocketseat. O nome do projeto é DoctorCare 🚀
        </p>

        <p>
          <a href="">jane.design/doctorcare</a>
        </p>

        <p>
          <a href="">#novoprojeto</a> <a href="">#nlw </a>{" "}
          <a href="">#rocketseat</a>
        </p>
      </div>
      <form className={styles.commentForm}>
        <strong>Deixe seu feedback</strong>
        <textarea
          className={styles.comment}
          placeholder="Deixe um comentário"
        ></textarea>
        <footer>
          <button type="submit" className={styles.publish}>
            Publicar
          </button>
        </footer>
      </form>
      <div className={styles.commentList}>
        <Comment />
        <Comment />
        <Comment />
      </div>
    </article>
  );
}
