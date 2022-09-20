import './categories.style.scss';
import Home from "./routes/home/home.component";
import {Route, Routes} from "react-router-dom";
import NavigationComponent from "./routes/navigation/navigation.component";
import SignInComponent from "./routes/sign-in/sign-in.component";

const Shop = () => {
    return <div>I am a shop</div>;
}

const App = () => {
    return (
        <Routes>
            <Route path="/" element={<NavigationComponent/>}>
                <Route index element={<Home/>}/>
                <Route path='shop' element={<Shop/>}/>
                <Route path='sign-in' element={<SignInComponent/>}/>
            </Route>
        </Routes>
    );

};

export default App;
