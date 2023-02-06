import style from './Header.module.css'

function Header(){
    return(
        <header className={style.header}>
            <h1 className={style.logo}>Biblio</h1>
        </header> 
    )
}

export default Header;