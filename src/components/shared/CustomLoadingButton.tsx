import { LoadingButton } from "@mui/lab";

type ButtonVariantType = "text" | "contained" | "outlined" | undefined

type ButtonProps = {
    text: string,
    loading: boolean,
    loadingIndicator?: string,
    loadingPosition?: "start" | "center" | "end",
    variant?: ButtonVariantType,
    disabled?: boolean,
    startIcon?: React.ReactNode
    endIcon?: React.ReactNode
    onClick: () => void
}

const CustomLoadingButton: React.FC<ButtonProps> = (props) => {
    return (
        <LoadingButton
            loading={props.loading}
            loadingIndicator={props.loadingIndicator}
            loadingPosition={props.loadingPosition ?? "center"}
            startIcon={props.startIcon}
            endIcon={props.endIcon}
            onClick={props.onClick}
        >
            {props.text}
        </LoadingButton>
    )
}

export default CustomLoadingButton;