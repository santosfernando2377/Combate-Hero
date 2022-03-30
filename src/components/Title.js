import style from './Title.module.css'

export default function Title(props){
    return (
        <>
            <h1 className={`my-2 ${style.title} ${style.mobileContainer}`}>{props.title}</h1>
        </>
    )
}