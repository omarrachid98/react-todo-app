const Button = ({bgColor, textColor, onClickButton, children}) => {
    return (
        <button
            className={`${bgColor} ${textColor} rounded-lg p-2`}
            onClick={onClickButton}
        >
        {children}
        </button>
    )
}

export default Button;