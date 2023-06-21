import { ThumbsUp, Trash } from "phosphor-react";
import { useState } from "react";
import { Avatar } from "./Avatar";
import styles from "./Comment.module.css";

export function Comment({ content, onDeleteComment }) {
    const [likeCount, setLikeCount] = useState(0);

    function handleDeleteComment() {
        onDeleteComment(content);
    }

    function handleLikeCount() {
        // setLikeCount(likeCount + 1);
        // Sempre que tivermos que atualizar uma informação e houver dependência do valor
        // que ela tinha anteriormente, devemos usar o padrão de funções citado abaixo:
        setLikeCount((stateLikeCount) => {
            return stateLikeCount + 1;
        });
    }

    return (
        <div className={styles.comment}>
            <Avatar
                hasBorder={false}
                src="https://github.com/pv-estefanifujimoto.png"
            />
            <div className={styles.commentBox}>
                <div className={styles.commentContent}>
                    <header>
                        <div className={styles.authorAndTime}>
                            <strong>Um certo alguém</strong>
                            <time
                                title="17 de abril às 21h32"
                                dateTime="2023-04-17 21:32"
                            >
                                Cerca de 1h atrás
                            </time>
                        </div>
                        <button
                            onClick={handleDeleteComment}
                            onFocus={handleDeleteComment}
                            title="Deletar comentário"
                        >
                            <Trash size={24} />
                        </button>
                    </header>
                    <p>{content}</p>
                </div>

                <footer>
                    <button onClick={handleLikeCount}>
                        <ThumbsUp />
                        Aplaudir <span>{likeCount}</span>
                    </button>
                </footer>
            </div>
        </div>
    );
}
