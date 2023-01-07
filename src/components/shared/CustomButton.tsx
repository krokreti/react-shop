import Button from "@mui/material/Button";

type ButtonVariantType = "text" | "contained" | "outlined" | undefined

type ButtonProps = {
    text: string,
    variant?: ButtonVariantType,
    disabled?: boolean,
    startIcon?: React.ReactNode
    endIcon?: React.ReactNode
    onClick: () => void
}

const CustomButton: React.FC<ButtonProps> = (props) => {
    return (
    <Button 
        variant={props.variant ?? "contained"}
        disabled={props.disabled ?? false}
        startIcon={props.startIcon}
        onClick={props.onClick}
    >
        {props.text}
    </Button>)
}

export default CustomButton;