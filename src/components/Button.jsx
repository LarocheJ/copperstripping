
export default function Button (props) {
    return(
        <a href={props.link} className={`${props.secondary ? "button button--secondary" : "button"}${props.classes ? " " + props.classes : ""}`} target={`${props.newTab ? '_blank' : '_self'}`}>{props.title ? props.title : "Schedule a pickup"}</a>
    )
}