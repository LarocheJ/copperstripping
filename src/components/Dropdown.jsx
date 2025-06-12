export default function Dropdown(props) {
    return(
        <div className="dropdown">
            <h3 className="dropdown__title">{props.title}</h3>
            <p className="dropdown__content">{props.content}</p>
        </div>
    )
}