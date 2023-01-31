import menu_icon from '../assets/menu-icon.svg'
export default function Header () {
    return (
        <div className="container">
            <div className="header-container">
            <h1 className="logo">B</h1>
            <ul className="links">
                <li><a href="#">Home</a></li>
                <li><a href="#">About</a></li>
                <li><a href="#" target='__blank'>Contact Me</a></li>
            </ul>   
            <img className='hamburger-icon' src={menu_icon}></img>           
            </div>
        </div>
    )
}