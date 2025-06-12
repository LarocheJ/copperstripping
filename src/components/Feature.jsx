import checkmark from '../assets/checkmark-icon.svg';

export default function Feature(props) {
    return(
        <div className="feature-list__item">
            <div className="feature-list__icon">
                <img src={checkmark}/>
            </div>
            <div className="feature-list__content">
                <h3 className="feature-list__title">{props.title}</h3>
                <p className="feature-list__text">{props.text}</p>
            </div>
        </div>
    )
}