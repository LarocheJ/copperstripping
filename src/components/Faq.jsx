import Dropdown from './Dropdown';

export default function Faq() { 
    return (
        <section className="section section--grey section-faq" id="faq">
            <div className="container">
                <h2 className="section-title section-title--center section-title--spaced">Frequently Asked Questions</h2>
                <div className="dropdowns">
                    <Dropdown 
                        title="What types of copper wire do you buy?" 
                        content="We buy all types of scrap copper wire, including insulated, bare bright, and more. If you're unsure, just ask!" 
                    />
                    <Dropdown 
                        title="How do you determine the price of my scrap?" 
                        content="Our prices are based on real-time copper market rates. We use accurate on-site weighing for transparency." 
                    />
                    <Dropdown 
                        title="Is there a minimum amount required for pickup?" 
                        content="We don’t have a strict minimum, but larger amounts may receive better pricing. Contact us to discuss your load!" 
                    />
                    <Dropdown 
                        title="Where do you offer pickup?" 
                        content="We service all of Calgary. If you’re outside this area, reach out—we may still be able to help!" 
                    />
                </div>
            </div>
        </section>
    )
}