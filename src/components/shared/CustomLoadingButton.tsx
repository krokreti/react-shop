import { Box, CircularProgress } from "@mui/material"
import CustomButton from "./CustomButton"

type ButtonVariantType = "text" | "contained" | "outlined" | undefined

type ButtonProps = {
    text: string,
    isLoading: boolean,
    variant?: ButtonVariantType,
    disabled?: boolean,
    startIcon?: React.ReactNode
    endIcon?: React.ReactNode
    onClick: () => void
}

const CustomLoadingButton: React.FC<ButtonProps> = (props) => {
    return (
        <Box>
            {!props.isLoading && (
                <CustomButton
                    text={props.text}
                    variant={props.variant ?? "contained"}
                    disabled={props.disabled ?? false}
                    startIcon={props.startIcon}
                    onClick={props.onClick}
                    sx={{ width: '100%' }}
                />
            )}
            {props.isLoading && (
                <Box sx={{ display: 'flex', justifyContent: 'center' }}>
                    <CircularProgress />
                </Box>
            )}
        </Box>
    )
}

export default CustomLoadingButton;