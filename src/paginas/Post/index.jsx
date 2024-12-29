import { useParams } from "react-router-dom";
import ReactMarkdown from "react-markdown";
import posts from "json/posts.json";
import "./Post.css";
import PostModelo from "components/PostModelo";

export default function Post() {

    const parametros = useParams();
    const post = posts.find((post) => {
        return post.id === Number(parametros.id); // Number() para converter o id para número
    });
    console.log(post);

    if(!post) {
        return <h1>Post não encontrado</h1>
    }

    return (
        <PostModelo 
            titulo={post.titulo}
            fotoCapa={`/assets/posts/${post.id}/capa.png`}
        >

            <div className="post-markdown-container">    
                <ReactMarkdown>
                    {post.texto}
                </ReactMarkdown>
            </div>
        </PostModelo>
    )
}