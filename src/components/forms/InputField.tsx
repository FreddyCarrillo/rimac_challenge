import { FieldError } from "react-hook-form";
import { useFormContext } from "../../contexts/FormContext";
import { styled } from "@mui/material";
import styles from './form.module.scss';

interface InputFieldProps {
  name: string;
  [key: string]: any;
}

export const InputFieldCustom = styled('input')({
  color: '#C5CBE0',
  paddingLeft: 18,
  borderRadius: '1.01px',
  border: 'solid 1px #C5CBE0',
  width: '100%',
  height: 50,
});

const InputField: React.FC<InputFieldProps> = (props) => {

  const {
    name,
    type = 'text',
    placeholder = '',
  } = props;

  const {
    register,
    formState: {
      errors
    },
  } = useFormContext();

  const error = errors[name] as FieldError | undefined;

  return (
    <>
      <InputFieldCustom
        {...props}
        {...register(name)}
        sx={(error?.message) ? { border: '1px solid #D32F30' } : {}}
        type={type}
        placeholder={placeholder}
      />
      {
        error?.message
         &&
            <div className={styles.message__error}>
              {error?.message}
            </div>
      }
    </>
  )
}

export default InputField;
