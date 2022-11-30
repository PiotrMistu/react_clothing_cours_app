import "./button.styles";
import {ButtonContainer, GoogleSignInBTN, InvertedBTN} from "./button.styles";

export const BUTTON_TYPE_CLASSES = {
    base: "base",
    google: "google-sign-in",
    inverted: "inverted",
};

const getButton = (buttonType = BUTTON_TYPE_CLASSES.base) => {
    const res = {
        [BUTTON_TYPE_CLASSES.base]: ButtonContainer,
        [BUTTON_TYPE_CLASSES.google]: GoogleSignInBTN,
        [BUTTON_TYPE_CLASSES.inverted]: InvertedBTN
    };
    console.log(res);
    return res[buttonType];
}

const Button = ({children, buttonType, ...otherProps}) => {
    const ButtonStyle = getButton(buttonType);
    return (
        <ButtonStyle
            {...otherProps}
        >
            {children}
        </ButtonStyle>
    );
};

export default Button;
