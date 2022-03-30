import style from './Home.module.css'
import Title from '../components/Title'
import Button from '../components/Button'

export default function Home() {
    return (
        <div className={"container-fluid w-100 vh-100 d-flex flex-column justify-content-center align-items-center sm:container-sm " + style.background} >
            <Title title='Combate Hero'/>
            <Button send={'/combate'} title='Começar Combate'/>
        </div>
    )
}