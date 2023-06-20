import styles from "./Avatar.module.css";
export function Avatar({hasBorder = true, src}) {
  return (
    <img
      src={src}
      alt="Avatar"
      className={hasBorder ? styles.avatarWhitBorder : styles.avatar}
    />
  );
}
