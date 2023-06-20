import { ThumbsUp, Trash } from "phosphor-react";
import styles from "./Comment.module.css";

export function Comment() {
  return (
    <div className={styles.comment}>
      <img
        src="https://github.com/pv-estefanifujimoto.png"
        alt="Avatar"
        className={styles.avatar}
      />
      <div className={styles.commentBox}>
        <div className={styles.commentContent}>
          <header>
            <div className={styles.authorAndTime}>
              <strong>Um certo alguém</strong>
              <time title="17 de abril às 21h32" dateTime="2023-04-17 21:32">
                Cerca de 1h atrás
              </time>
            </div>
            <button title="Deletar comentário">
                <Trash size={24}/>
            </button>
          </header>
          <p>Muito bom Devon, parabéns!! 👏👏</p>
        </div>

        <footer>
            <button>
                <ThumbsUp />
                Aplaudir <span>20</span>
            </button>
        </footer>
      </div>
    </div>
  );
}
