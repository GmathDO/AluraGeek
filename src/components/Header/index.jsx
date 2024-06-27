import "./Header.css"

const Header = () => {
    return <header>
        <div className="header--logo">
            <img src="img/logo-AluraGeek.svg" alt="Logo AluraGeek" />
            <h1 className="logo-title title">Alura<span>Geek</span></h1>
        </div>
    </header>
}

export default Header