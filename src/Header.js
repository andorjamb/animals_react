import './Header.css';

const Header = function (props) {

    return (
        <header><h1 onClick={props.click}>{props.number} Animals</h1 ></header>

    )
}

export default Header;