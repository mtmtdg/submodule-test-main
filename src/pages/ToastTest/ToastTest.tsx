import { Button } from '@mui/material';
import { ToastService } from '../../shared/Toast';
import styles from './ToastTest.module.scss';

interface ToastTestProps {}

export default function ToastTest(props: ToastTestProps) {
  const showInfo = () => {
    ToastService.info('123');
  };

  return (
    <div className={styles.ToastTest}>
      <p>ToastTest works!</p>
      <Button onClick={showInfo}>info</Button>
    </div>
  );
}
