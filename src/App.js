import './categories.style.scss';
import Home from "./routes/home/home.component";
import {Route, Routes} from "react-router-dom";
import NavigationComponent from "./routes/navigation/navigation.component";

const Shop = () => {
    return <div>I am a shop</div>;
}

const App = () => {
    return (
        <Routes>
            <Route path="/" element={<NavigationComponent/>}>
                <Route index element={<Home/>}/>
                <Route path='shop' element={<Shop/>}/>
            </Route>
        </Routes>
    );

};

export default App;
