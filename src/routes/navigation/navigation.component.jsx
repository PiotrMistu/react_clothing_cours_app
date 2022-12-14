import {Link, Outlet} from "react-router-dom";
import {ReactComponent as Logo} from "../../assets/crown.svg"
import './navigation.styles.scss';
import {Fragment} from "react";

const NavigationComponent = () => {

    return (
        <Fragment>
            <div className="navigation">
                <Link className="logo-container" to='/'>
                    <Logo className='logo'/>
                </Link>
                <div className='nav-links-container'>
                    <Link className="nav-link" to='/shop'>
                        Shop
                    </Link>
                </div>
                <div className='nav-links-container'>
                    <Link className="nav-link" to='/sign-in'>
                        Sign in
                    </Link>
                </div>
            </div>
            <Outlet/>
        </Fragment>
    );
}
export default NavigationComponent;
