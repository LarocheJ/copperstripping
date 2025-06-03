export default function Step(props) {
    return (
        <div className="step">
            <img className="step__icon" src={props.icon} />
            <h3 className="step__title">{props.title}</h3>
            <p className="step__description">{props.description}</p>
        </div>
    ); 
}