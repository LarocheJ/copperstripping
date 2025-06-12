import handshake from '../assets/handshake_stock.webp'
import Feature from './Feature';

export default function Prices() {
    return (
        <section className="choose-us section" id="choose-us">
            <div className="container">
                
                <div className="split-section">
                    <div className="split-section__image">
                        <img src={handshake} alt="Various copper cables that had the ends trimmed" className="prices__image" />
                    </div>
                    <div className="split-section__content">
                        <h2 className="section-title choose-us__title">Why Choose Us</h2>
                        <div className="feature-list">
                            <Feature title="Free Pickup" text="No hassle, we come to you!" />
                            <Feature title="Fast & Honest Payment" text="No delays, no hidden fees." />
                            <Feature title="Accurate On-Site Weighing" text="Transparency guaranteed." />
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}