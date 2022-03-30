import Title from "../components/Title"
import Button from "../components/Button"
import style from "./404.module.css"

export default function NotFound() {
    return (
        <div className={"container-fluid w-100 vh-100 d-flex flex-column justify-content-center align-items-center sm:container-sm " + style.background} >
            <Title title='404 :('/>
            <Button send={'/'} title='Voltar'/>
        </div>
    )
}