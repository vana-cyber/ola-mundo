import styles from "./Rodape.module.css";
// import MarcaRegistrada from "assets/marca_registrada.svg";

export default function Rodape() {
    return (
        <footer className={styles.rodape}>
            {/* <MarcaRegistrada /> */}
            <img src="/assets/marca_registrada.svg"/>
            <p>
                Desenvolvido por <a href="https://github.com/vana-cyber">Geovana</a>
            </p>
        </footer>
    )
}