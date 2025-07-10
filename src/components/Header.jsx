import React, { useEffect, useState } from "react";
import Button from "./Button";

export default function Header() {
    const [scrolled, setScrolled] = useState(false);
    const [isBurgerOpen, setIsBurgerOpen] = useState(false);

    const handleBurgerClick = () => {
        setIsBurgerOpen(!isBurgerOpen);
    }

    const handleLinkClick = () => {
        if (isBurgerOpen) {
            setIsBurgerOpen(false);
        }
    }

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
                <span className="logo"><a href="#"><span className="color-copper">Copper</span>Stripping</a></span>
                <nav className={`nav${isBurgerOpen ? " nav--active" : ""}`}>
                    <a className="nav__item" href="#how-it-works" onClick={handleLinkClick}>How it works</a>
                    <a className="nav__item" href="#pricing" onClick={handleLinkClick}>Pricing</a>
                    <a className="nav__item" href="#faq" onClick={handleLinkClick}>FAQ</a>
                    <a className="nav__item" href="#contact" onClick={handleLinkClick}>Contact</a>
                    <Button title="" link="https://jimmylar91.youcanbook.me" newTab={true} />
                </nav>
                <div className={`hamburger ${isBurgerOpen ? "hamburger--active" : ""}`} onClick={handleBurgerClick}>
                    <span className="hamburger__line"></span>
                    <span className="hamburger__line"></span>
                    <span className="hamburger__line"></span>
                </div>
            </div>
        </header>
    )
}