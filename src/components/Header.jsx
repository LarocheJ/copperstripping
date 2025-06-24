import React, { useEffect, useState } from "react";
import Button from "./Button";

export default function Header() {
    const [scrolled, setScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            const offset = window.scrollY;
            setScrolled(offset > 50);
        }

        window.addEventListener("scroll", handleScroll);

        return () => window.removeEventListener("scroll", handleScroll);
    }, [])

    return(
        <header className={`header` + (scrolled ? " header--scrolled" : "")}>
            <div className="container">
                <span className="logo"><span className="color-copper">Copper</span>Stripping</span>
                <nav className="nav">
                    <a className="nav__item" href="">How it works</a>
                    <a className="nav__item" href="">Pricing</a>
                    <a className="nav__item" href="">FAQ</a>
                    <a className="nav__item" href="">Contact</a>
                    <Button title="" link="#" />
                </nav>
                <div className="hamburger">
                    <span className="hamburger__line"></span>
                    <span className="hamburger__line"></span>
                    <span className="hamburger__line"></span>
                </div>
            </div>
        </header>
    )
}