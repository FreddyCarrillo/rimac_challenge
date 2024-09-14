import Grid from '@mui/material/Grid';
import TitleInit from './components/TitleInit';
import { useQuoteVehicle } from './hooks/useQuoteVehicle';
import { FormProvider } from '../../contexts/FormContext';
import PatternField from '../../components/forms/PatternField';
import styles from './VehicleQuotePage.module.scss';
import ActionButton from '../../components/forms/ActionButton';
import InputField from '../../components/forms/InputField';
import CheckBoxField from '../../components/forms/CheckBoxField';

const VehicleQuotePage = () => {

  const {
    form,
    onSubmit,
    isLoading,
  } = useQuoteVehicle();

  const {
    handleSubmit
  } = form;

  return (
    <div>
      <Grid container>
        <TitleInit />
        <Grid item md={8} className={styles.ctn__form}>
          
          <div className={styles.form}>
            <FormProvider form={form}>
              <form onSubmit={handleSubmit(onSubmit)}>
                <div className={styles.form__title}>
                  Déjanos tus datos
                </div>
                <div>
                  <PatternField
                    name="dni"
                    format="########"
                    placeholder="Nro. de doc"
                  />
                </div>
                <div className={styles.ctn__input}>
                  <PatternField
                    name="phone"
                    format="#########"
                    placeholder="Celular"
                  />
                </div>
                <div>
                  <InputField
                    name="carPlace"
                    placeholder="Placa"
                    maxLength={6}
                  />
                </div>
                <div className={styles.ctn__general__terms}>
                  <CheckBoxField
                    name="termsAndConditions"
                  />
                  <div className={styles.ctn__terms}>
                    <span>Acepto la </span>
                    <span className={styles.description__mark}>Política de Protección de Datos Personales</span>
                    <span> y los </span>
                    <span className={styles.description__mark}>Términos y Condiciones</span>
                  </div>
                </div>
                <div className={styles.ctn__actionBtn}>
                  <ActionButton
                    isLoading={isLoading}
                    title='COTÍZALO'
                    type='submit'
                  />
                </div>
              </form>
            </FormProvider>
          </div>

        </Grid>
      </Grid>
    </div>
  );
};

export default VehicleQuotePage;
