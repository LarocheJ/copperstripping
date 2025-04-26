import Button from "./Button";

export default function Hero() {
    return(
        <section className="hero container">
            <div className="hero__content">
                <h1 className="hero__title">Turn  Your Scrap Copper into <span className="color-copper">Instant Cash</span> - We Come to You!</h1>
                <p className="hero__description">No more scrapyard trips—get fast, honest payment with free pickup and on-site or off-site weighing.</p>
                <div className="hero__button-group">
                    <Button title="" link="#" />
                    <Button title="Call Now" link="#" secondary={true} />
                </div>
                
            </div>
        </section>
    )
}