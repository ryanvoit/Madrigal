import { FC, useState } from "react"
import { ChangeEventHandler } from "react"
import { forwardRef } from "react"

export interface CustomInputProps {
    inputType: 'email' | 'password',
    placeholder: string,
    id: string,
    required: boolean,
    labelValue: string,
    name?: string,
    onBlur?: ChangeEventHandler<HTMLInputElement>,
    onChange?: ChangeEventHandler<HTMLInputElement>,
    errorMessage?: string
}

export const CustomInput = forwardRef<HTMLInputElement, CustomInputProps>(
    ({ inputType, placeholder, id, required, labelValue, name, onChange, onBlur,
        errorMessage
    }, ref) => {
        const [input, setInput] = useState('')

        const handleInput: ChangeEventHandler<HTMLInputElement> = (event) => {
            setInput(event.target.value)
            onChange?.(event)
        }

        /*
        const handleClear = () => {
            setInput('')
        }
            */

        return (
            <div className="custom-input">
                <input className="custom-input__field"
                    type={inputType}
                    id={id}
                    ref={ref}
                    placeholder={placeholder}
                    onChange={handleInput}
                    value={input ?? ''}
                    required={required}
                    name={name}
                    onBlur={onBlur}
                />
                <label className="custom-input__label" htmlFor={id}>{labelValue}</label>
                {errorMessage && <span className="custom-input__error text-red-500">{errorMessage}</span>}
            </div>
        )
    }
)

CustomInput.displayName = 'CustomInput'
