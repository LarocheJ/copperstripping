import Button from "./Button";

export default function Header() {
    return(
        <header className="header container">
            <span className="logo"><span className="color-copper">Copper</span>Stripping</span>
            <nav className="nav">
                <a className="nav__item" href="">How it works</a>
                <a className="nav__item" href="">Pricing</a>
                <a className="nav__item" href="">FAQ</a>
                <a className="nav__item" href="">Contact</a>
                <Button title="" link="#" />
            </nav>
        </header>
    )
}