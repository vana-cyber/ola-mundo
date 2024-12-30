import { Route, Routes, useParams } from "react-router-dom";
import ReactMarkdown from "react-markdown";
import posts from "json/posts.json";
import "./Post.css";
import PostModelo from "components/PostModelo";
import NaoEncontrada from "paginas/NaoEncontrada";
import PaginaPadrao from "components/PaginaPadrao";

export default function Post() {

    const parametros = useParams();
    const post = posts.find((post) => {
        return post.id === Number(parametros.id); // Number() para converter o id para número
    });
    console.log(post);

    if (!post) {
        return (

            <NaoEncontrada />
        )
    }

    return (
        <PaginaPadrao>
            <PostModelo
                fotoCapa={`/assets/posts/${post.id}/capa.png`}
                titulo={post.titulo}
            >
                <div className="post-markdown-container">
                    <ReactMarkdown>
                        {post.texto}
                    </ReactMarkdown>
                </div>
            </PostModelo>
        </PaginaPadrao>
    )
}