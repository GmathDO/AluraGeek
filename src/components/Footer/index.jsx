import "./Footer.css"

const Footer = () => {
    return <footer>
        <div className="footer-logo">
            <img src="./img/logo-AluraGeek.svg" alt="Logo AluraGeek" />
            <h1 className="logo-title title">Alura<span>Geek</span></h1>
        </div>
        <div className="footer-text">
            <h4 className="developer-text">DESARROLLADO POR MATHIAS</h4>
            <h4 className="alura-text">ALURA LATAM - 2024</h4>
        </div>
    </footer>
}

export default Footer