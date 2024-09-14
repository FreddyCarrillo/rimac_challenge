import { Grid } from "@mui/material";
import styles from '../VehicleQuotePage.module.scss';
import backgroundWeb from '../../../assets/images/VehicleQuote/Background_web.png';
import logoWeb from '../../../assets/images/VehicleQuote/Logo_web.png';

const TitleInit = () => {
  return (
    <Grid item md={4} className={styles.ctn__logo}>
      <img
        src={backgroundWeb}
        className={styles.background__web}
      />
      <img
        src={logoWeb}
      />
      <div className={styles.ctn__description}>
        <div className={styles.title1}>
          ¡NUEVO!
        </div>
        <div className={styles.title2}>
          Seguro <span>Vehicular</span>
        </div>
        <div className={styles.title3}>
          Tracking
        </div>
        <div className={styles.title4}>
          Cuentanos donde le harás seguimiento a tu
        </div>
        <div className={styles.title4}>
          seguro
        </div>
      </div>
    </Grid>
  )
}

export default TitleInit;
