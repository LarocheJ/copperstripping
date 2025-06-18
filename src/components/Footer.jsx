import Button from './Button'
const today = new Date();

export default function Footer() {
    return (
        <>
            <footer className="footer section">
                <div className="container">
                    <h2 className="footer__title section-title section-title--center">Let's Get Started</h2>
                    <div className="button-container button-container--center">
                        <Button link="#" title="Schedule a Pickup" classes="footer__button" />
                    </div>
                    <div className="footer__contact">
                        <a href="mailto:info@copperstripping.com">info@copperstripping.com</a>
                        <a href="tel:403-123-4567">403-123-4567</a>
                    </div>
                </div>
            </footer>
            <small className="copyright">© {today.getFullYear()} CopperStripping.com All Rights Reserved.</small>
        </>
    )
}