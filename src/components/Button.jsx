
export default function Button (props) {
    return(
        <a href={props.link} className={`${props.secondary ? "button button--secondary" : "button"}${props.classes ? " " + props.classes : ""}`}>{props.title ? props.title : "Schedule a pickup"}</a>
    )
}

// 