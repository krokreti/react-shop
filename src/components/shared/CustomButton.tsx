import Button from "@mui/material/Button";

type ButtonVariantType = "text" | "contained" | "outlined" | undefined

type ButtonProps = {
    text: string,
    variant?: ButtonVariantType,
    disabled?: boolean,
    startIcon?: React.ReactNode,
    endIcon?: React.ReactNode,
    sx?: {}
    onClick: () => void
}

const CustomButton: React.FC<ButtonProps> = (props) => {
    return (
        <Button 
            variant={props.variant ?? "contained"}
            type={"button"}
            disabled={props.disabled ?? false}
            startIcon={props.startIcon}
            endIcon={props.endIcon}
            onClick={props.onClick}
            sx={props.sx}
            >
            {props.text}
        </Button>
    )
}

export default CustomButton;