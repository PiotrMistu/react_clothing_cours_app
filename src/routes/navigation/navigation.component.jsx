import {Outlet} from "react-router-dom";

const NavigationComponent = () => {

    return (
        <div>
            <h1>I am nav component</h1>
            <Outlet/>
        </div>
    );
}
export default NavigationComponent;
