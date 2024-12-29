import styles from "./SobreMim.module.css"
import PostModelo from "components/PostModelo"
import fotoCapa from "assets/sobre_mim_capa.png"
import fotoSobreMim from "assets/sobre_mim_foto.jpg"

export default function SobreMim() {
    return (
        <PostModelo fotoCapa={fotoCapa} titulo="Sobre Mim"
        >
            <h3 className={styles.subtitulo}>
                Olá! Meu Nome é Geovana e sou estudante de Jogos Digitais.
            </h3>
            <img
                src={fotoSobreMim}
                alt="Foto de Geovana sorrindo"
                className={styles.fotoSobreMim}
            />

            <p className={styles.paragrafo}>
                Lorem, ipsum dolor sit amet consectetur adipisicing elit. Unde ab ipsa consectetur dolor repellendus vero numquam, asperiores nam magnam maiores esse in accusamus a inventore delectus minus id repellat aperiam!
            </p>
        </PostModelo>
    )
}