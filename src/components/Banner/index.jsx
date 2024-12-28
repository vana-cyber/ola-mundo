import "./Banner.module.css";
import styles from "./Banner.module.css";
import circuloColorido from "assets/circulo_colorido.png";
import minhaFoto from "assets/minha_foto.jpg";

export default function Banner() {
    return (
        <>
            <div className={styles.banner}>
                <div className={styles.apresentacao}>
                    <h1 className={styles.titulo}>
                        Olá Mundo!
                    </h1>
                    <p className={styles.paragrafo}>
                        Lorem ipsum, dolor sit amet consectetur adipisicing elit. In beatae amet deserunt optio ab quisquam impedit veritatis corporis dolorem, nulla ducimus nemo. Esse aut maiores quisquam suscipit culpa exercitationem error.
                    </p>
                </div>
                <div className={styles.imagens}>
                    <img className={styles.circuloColorido} src={circuloColorido} aria-hidden={true} />
                    <img className={styles.minhaFoto} src={minhaFoto} alt="Foto da Geovana sorrindo." />    
                </div>
            </div>
        </>
    );
    }