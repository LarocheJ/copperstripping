import Step from './Step';
import Clock from '../assets/clock-icon.svg';
import Scale from '../assets/scale-icon.svg';
import Dollar from '../assets/dollar-icon.svg';

export default function HowItWorks() {
    return (
        <section className="steps section">
            <div className="container">
                <h2 className="steps__title">How It Works</h2>
                <div className="steps__container">
                    <Step 
                        icon={Clock} 
                        title="Schedule a Pickup"
                        description="Contact us to arrange a convenient time for pickup. We work around your schedule."
                    />
                    <Step
                        icon={Scale} 
                        title="Weigh Your Copper"
                        description="We come to your location and weigh your copper scrap on-site or off-site, ensuring transparency."
                    />
                    <Step
                        icon={Dollar} 
                        title="Get Paid Instantly"
                        description="Receive immediate cash payment for your scrap copper. No waiting, no hassle."
                    />
                </div>
            </div>
        </section>
    )
}