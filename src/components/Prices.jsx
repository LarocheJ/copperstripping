import copperCablesImg from '../assets/copper-cables.webp'

export default function Prices() {
    return (
        <section className="prices section section--grey" id="prices">
            <div className="container">
                
                <div className="split-section">
                    <div className="split-section__content">
                        <h2 className="prices__title section-title">Our Prices</h2>
                        <p className="prices__description">Our pricing depends on the amount of insulation or plastic coating on the copper wire. For wires with minimal coating, we offer up to $1.80 per pound.</p>
                        <p>Please <a href="#contact">contact us</a> for pricing details.</p>
                    </div>
                    <div className="split-section__image">
                        <img src={copperCablesImg} alt="Various copper cables that had the ends trimmed" className="prices__image" />
                    </div>
                </div>
            </div>
        </section>
    );
}