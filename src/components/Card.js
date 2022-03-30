export default function Card(props) {
    return (
        <div className="card" style="width: 18rem;">
            <img src={props.imagem} className="card-img-top" alt="..."/>
            <div className="card-body">
                <p className="card-text">{props.sobre}</p>
            </div>
        </div>
    )
}