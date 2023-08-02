import { Route, Routes } from "react-router-dom";
import Layout from "../Layout/Layout";
import User from "../components/User";
import User2 from "../components/User2";
import User3 from "../components/User3";

export default function MyApp():JSX.Element {
    return(
        <Routes>
            <Route path="/" element = {<Layout />}  >
                <Route path="user" element ={<User />} />     
                <Route path="user2" element ={<User2 />} />     
                <Route path="user3" element ={<User3 />} />     
            </Route>
        </Routes>
    )
}