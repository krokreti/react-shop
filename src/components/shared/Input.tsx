import { TextField } from "@mui/material";


const Input: React.FC<{ 
    variant: "outlined", 
    id: string, 
    label: string, 
    type: string, 
    defaultValue?: string, 
    required?: boolean, 
    helperText?: string,
    value?: string,
    disabled?: boolean,
    onChange: (event: React.ChangeEvent<HTMLInputElement>) => void,
}> = props => {
    return (
        <TextField 
            value={props.value}
            defaultValue={props.defaultValue}
            variant={props.variant}
            id={props.id}
            label={props.label}
            helperText={props.helperText}
            required={props.required}
            disabled={props.disabled}
            type={props.type}
            onChange={props.onChange}
        />
    )
}

export default Input;