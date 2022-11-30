import {Fragment, useContext} from 'react';
import {Outlet} from 'react-router-dom';

import {UserContext} from '../../contexts/user.context';

import {ReactComponent as CrwnLogo} from '../../assets/crown.svg';
import {signOutUser} from '../../utils/firebase/firebase.utils';

import './navigation.styles';
import CartIconComponent from "../../components/cart-icon/cart-icon.component";
import CardDropdownComponent from "../../components/cart-dropdown/card-dropdown.component";
import {CartContext} from "../../contexts/cart.context";
import {LogoContainer, NavComponent, NavLink, NavLinkComponent} from "./navigation.styles";

const Navigation = () => {
    const {currentUser} = useContext(UserContext);
    const {isCartOpen, cardItems, itemsInCart} = useContext(CartContext);
    return (<Fragment>
        <NavComponent>
            <LogoContainer to='/'>
                <CrwnLogo className='logo'/>
            </LogoContainer>
            <NavLinkComponent>
                <NavLink to='/shop'>
                    SHOP
                </NavLink>
                {currentUser ? (<NavLink onClick={signOutUser}>
                    s {' '}
                    SIGN OUT{' '}
                </NavLink>) : (<NavLink to='/auth'>
                    SIGN IN
                </NavLink>)}
                <CartIconComponent countInCart={itemsInCart}></CartIconComponent>
            </NavLinkComponent>
            {isCartOpen && <CardDropdownComponent params={cardItems}></CardDropdownComponent>}
        </NavComponent>
        <Outlet/>
    </Fragment>);
};

export default Navigation;
