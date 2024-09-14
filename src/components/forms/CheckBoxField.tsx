import { useFormContext } from "../../contexts/FormContext";
import { FieldError } from "react-hook-form";
import styles from './form.module.scss';
import { Checkbox } from "@mui/material";

interface FieldProps {
  name: string;
  [key: string]: any;
}

const CheckBoxField: React.FC<FieldProps> = (props) => {

  const {
    name
  } = props;

  const {
    setValue,
    clearErrors,
    formState: {
      errors
    },
  } = useFormContext();

  const error = errors[name] as FieldError | undefined;

  return (
    <>
      <Checkbox
        color="success"
        onChange={(e) => {
          clearErrors(name);
          setValue(name, e.target.checked);
        }}
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

export default CheckBoxField;
