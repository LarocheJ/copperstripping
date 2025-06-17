export default function Dropdown(props) {
    return(
        <details className="dropdown">
            <summary className="dropdown__summary">
                <h3 className="dropdown__title">{props.title}</h3>
            </summary>
            <p className="dropdown__content">{props.content}</p>
        </details>
    )
}