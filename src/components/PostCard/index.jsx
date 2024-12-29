import { Link } from "react-router-dom"
import styles from "./Post.module.css"
import BotaoPrincipal from "components/BotaoPrincipal"

export default function PostCard({ post }) {
    return (

        <>
            <Link to={`/post/${post.id}`}>
                <img className={styles.capa} src={`/public/posts/${post.id}/capa.png`} alt="Imagem de capa do post" />
                <h2 className={styles.titulo}>{post.titulo}</h2>
                <BotaoPrincipal>Ler post</BotaoPrincipal>  
            </Link>
        </>
    )
}