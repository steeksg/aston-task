import logo from "./logo.svg"
import "./Title.scss"

export default function Title() {
    return <div className="title--wrap">
        <div className='title--logoBox'>
            <img alt="Logo" src={logo}></img>
        </div>
        <div className='title--text'>
            Rick and Morty Wiki 
        </div>
    </div>
};
