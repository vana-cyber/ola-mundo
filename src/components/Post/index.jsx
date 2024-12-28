import styles from "./Post.module.css"

export default function Post({ post }) {
    return (

        <>
            <img className={styles.capa} src={`/public/posts/${post.id}/capa.png`} alt="Imagem de capa do post" />
            <h2 className={styles.titulo}>{post.titulo}</h2>
            <button className={styles.botaoLer}>Ler post</button>  
        </>
    )
}