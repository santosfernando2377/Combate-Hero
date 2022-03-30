import {useRef} from "react"

export default function Modal(props) {
    
    const player1 = useRef(props.player1)
    const player2 = useRef(props.player2)

    function calcular(player1, player2) {
        let intelligence1, strength1, speed1, durability1, power1, combat1, name1, image1
        let intelligence2, strength2, speed2, durability2, power2, combat2, name2, image2
        // Player1
        combat1 = player1.current.powerstats.combat
        durability1 = player1.current.powerstats.durability
        intelligence1 = player1.current.powerstats.intelligence
        power1 = player1.current.powerstats.power
        speed1 = player1.current.powerstats.speed
        strength1 = player1.current.powerstats.strength
        name1 = player1.current.name
        image1 = player1.current.images.md
        // Player2
        combat2 = player2.current.powerstats.combat
        durability2 = player2.current.powerstats.durability
        intelligence2 = player2.current.powerstats.intelligence
        power2 = player2.current.powerstats.power
        speed2 = player2.current.powerstats.speed
        strength2 = player2.current.powerstats.strength
        name2 = player2.current.name
        image2 = player2.current.images.md        
        const player1Total = calcular1(combat1, durability1, intelligence1, power1, speed1, strength1)
        const player2Total = calcular1(combat2, durability2, intelligence2, power2, speed2, strength2)

        if (player1Total > player2Total) {
            return (
                <>
                    <h1 className="fs-3 my-3">O vencedor foi {name1}</h1>
                    <div className="text-center">
                        <img src={image1} className="rounded" alt={name1}/>
                    </div>
                </>
            )
        } 

        if (player1Total < player2Total) {
            return (
                <>
                    <h1 className="fs-3 my-3">O vencedor foi {name2}</h1>
                    <div className="text-center">
                        <img src={image2} className="rounded" alt={name2}/>
                    </div>
                </>
            )
        }

        if(player1Total === player2Total) {
            return (
                <h1>Empatou</h1>
            )
        }
    }

    function calcular1(intelligence, strength, speed, durability, power, combat){
        let soma = intelligence + strength + speed + durability + power + combat
        return soma
    }

    return (
        <>
        <button type="button" className="btn btn-dark" data-bs-toggle="modal" data-bs-target="#exampleModal">
            {props.buttonTitle}
        </button>

        <div className="modal fade" id="exampleModal" tabIndex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
            <div className="modal-dialog modal-lg">
                <div className="modal-content">
                    <div className="modal-header">
                        <h5 className="modal-title" id="exampleModalLabel">{props.contentTitle}</h5>
                        <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                    </div>
                    <div className="modal-body">
                        <div className="container d-flex flex-column justify-content-center align-items-center">
                            {calcular(player1, player2)}
                        </div>
                    </div>
                    <div className="modal-footer">
                        <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                    </div>
                </div>
            </div>
        </div>
        </>
    )
}