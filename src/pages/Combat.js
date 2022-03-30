import { useState, useEffect, useRef } from 'react'
import db from '../model/db.json'
import style from './Combat.module.css'
import Title from '../components/Title'
import Modal from '../components/Modal'

export default function Combat() {
    
    const [search, Search] = useState()
    const [search2, Search2] = useState()
    const refSearch = useRef(search)
    const refSearch2 = useRef(search2)

    useEffect(() =>{
        refSearch.current = search
        refSearch2.current = search2
    }, [search, search2])

    let player1 = db.find(element => element.name === search)
    let player2 = db.find(element => element.name === search2)
    
    function onSubmit(event) {
        event.preventDefault()
    }

    return (
        <div className={"container-fluid w-100 vh-100 d-flex flex-column justify-content-center align-items-center sm:container-sm " + style.background} >
            <Title title="Pesquise seu heroi"/>
            <div className={"container py-3"}>
                <form onSubmit={onSubmit}>
                    
                    <input onChange={(event => Search(event.target.value))} className="form-control my-2" list="datalistOptions" id="exampleDataList" placeholder="Player 1"/>
                    <datalist id="datalistOptions">
                        {db.map((data) =>(
                            <option key={data.id} value={data.name}></option>
                        ))}
                    </datalist>
                    
                    <input onChange={(event) => Search2(event.target.value)} className="form-control my-2" list="datalistOptions" id="exampleDataList" placeholder="Player 2"/>
                    <datalist id="datalistOptions">
                        {db.map((data) =>(
                            <option key={data.id} value={data.name}></option>
                        ))}
                    </datalist>
                    {search && search2 ? <Modal buttonTitle={'Combate'} contentTitle={`${search} vs ${search2}`} player1={player1} player2={player2}/> : <></>}
                </form>
            </div>
        </div>
    )
}