// const Home = () => {
//     return(
//         <div>
//             <h1>Home</h1>
//             <p>First Page</p>
//         </div>
//     )
// }

// a herf는 페이지를 다시 로드함
// 따라서 react-router-dom을 사용시에는 'Link'를 사용하도록 함
import { Link } from "react-router-dom";

function Home(){
    return(
        <div>
            <h1>Home</h1>
            <p>First Page</p>
            <Link to= '/about'>about</Link>
        </div>
    )
}

export default Home;