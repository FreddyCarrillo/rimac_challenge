import { PatternFormat } from "react-number-format";
import { useFormContext } from "../../contexts/FormContext";
import { FieldError } from "react-hook-form";
import styles from './form.module.scss';

interface PatternFieldProps {
  format: string;
  name: string;
  [key: string]: any;
}

const PatternField: React.FC<PatternFieldProps> = (props) => {

  const {
    format,
    name,
    placeholder = ''
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
      <PatternFormat
        type="text"
        format={format}
        className={
          (error?.message)
            ? styles.inputError
            : styles.input
        }
        onChange={(e) => {
          clearErrors(name);
          setValue(name, e.target.value.trim());
        }}
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

export default PatternField;
