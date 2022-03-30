import { Link } from "react-router-dom"

export default function Button(props) {
    return (
        <Link to={props.send}>
            <button type="button" className="btn btn-outline-dark my-2">{props.title}</button>
        </Link>
    )
}