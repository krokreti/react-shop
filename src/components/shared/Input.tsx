import { TextField } from "@mui/material";

type VariantType = "outlined" | "filled" | "standard" | undefined

type InputPropType = {
    id: string, 
    label: string, 
    type: string, 
    variant: VariantType, 
    defaultValue?: string, 
    required?: boolean, 
    helperText?: string,
    value?: string,
    disabled?: boolean,
    onChange: (event: React.ChangeEvent<HTMLInputElement>) => void,
}

const Input: React.FC<InputPropType> = props => {
    return (
        <TextField 
            value={props.value}
            defaultValue={props.defaultValue}
            variant={props.variant ?? "outlined" }
            id={props.id}
            label={props.label}
            helperText={props.helperText}
            required={props.required ?? false}
            disabled={props.disabled ?? false}
            type={props.type ?? "text"}
            onChange={props.onChange}
        />
    )
}

export default Input;