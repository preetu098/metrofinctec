import { Link } from "react-router-dom";
// import { about1 } from "../../../public/assets1/images/about1.jpg";
function Home() {
    return (
        <>

        <ul>
                <li>
                    <Link to="/">home</Link>
                </li>
                <li>
                    <Link to="/about">about</Link>
                </li>
                <li>
                    <Link to="/contact">contact</Link>
                </li>
            </ul>
        <h1>Home</h1>
        {/* <img src={about1}/> */}
        </>
    );
}

export default Home;
