import { format, formatDistanceToNow } from "date-fns";
import ptBr from "date-fns/locale/pt-BR";
import styles from "./Post.module.css";
import { Comment } from "./Comment";
import { Avatar } from "./Avatar";
import { useState } from "react";

export function Post({ author, content, publishedAt }) {
    //Alternativa javascript para formatação de data
    // const publishedDateFormatted = new Intl.DateTimeFormat("pt-BR", {
    //   day: "2-digit",
    //   month: "long",
    //   hour: "2-digit",
    //   minute: "2-digit"
    // }).format(publishedAt);

    const publishedDateFormatted = format(
        publishedAt,
        "d 'de' LLLL 'às' H:mm'h'",
        { locale: ptBr }
    );

    const publishedDateRelativeToNow = formatDistanceToNow(publishedAt, {
        locale: ptBr,
        addSuffix: true,
    });

    const [comments, setComments] = useState([]);

    const [newCommentText, setNewCommentText] = useState("");

    function handleCreateNewComment() {
        event.preventDefault();
        setComments([...comments, newCommentText]);
        setNewCommentText("");
    }

    function handleNewCommentChange(event) {
        event.target.setCustomValidity("");
        setNewCommentText(event.target.value);
    }

    function handleNewCommentInvalid(event) {
        event.target.setCustomValidity("Esse campo é obrigatório");
    }

    function deleteComment(commentToDelete) {
        // imutabilidade -> as variáveis não sofrem mutação, nós criamos um novo valor (um novo espaço de memória)
        const commentsWithoutDeleteOne = comments.filter((comment) => {
            return comment !== commentToDelete;
        });
        setComments(commentsWithoutDeleteOne);
    }

    const isNewCommentEmpty = newCommentText.length === 0;

    return (
        <article className={styles.post}>
            <header>
                <div className={styles.author}>
                    <Avatar src={author.avatarUrl} />
                    <div className={styles.authorInfo}>
                        <strong className={styles.authorName}>
                            {author.name}
                        </strong>
                        <span className={styles.authorOccupation}>
                            {author.role}
                        </span>
                    </div>
                </div>
                <time
                    title={publishedDateFormatted}
                    dateTime={publishedAt.toISOString()}
                >
                    {publishedDateRelativeToNow}
                </time>
            </header>
            <div className={styles.content}>
                {content.map((line) => {
                    if (line.type === "paragraph") {
                        return <p key={line.content}>{line.content}</p>;
                    } else if (line.type === "link") {
                        return (
                            <p key={line.content}>
                                <a href="">{line.content}</a>
                            </p>
                        );
                    }
                })}
            </div>
            <form
                onSubmit={handleCreateNewComment}
                className={styles.commentForm}
            >
                <strong>Deixe seu feedback</strong>
                <textarea
                    name="comment"
                    className={styles.comment}
                    placeholder="Deixe um comentário"
                    value={newCommentText}
                    onChange={handleNewCommentChange}
                    onInvalid={handleNewCommentInvalid}
                    required
                ></textarea>
                <footer>
                    <button type="submit" disabled={isNewCommentEmpty}>
                        Publicar
                    </button>
                </footer>
            </form>
            <div className={styles.commentList}>
                {comments.map((comment) => {
                    return (
                        <Comment
                            key={comment}
                            content={comment}
                            onDeleteComment={deleteComment}
                        />
                    );
                })}
            </div>
        </article>
    );
}
