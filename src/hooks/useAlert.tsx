import { useState } from 'react';
type TShowAlert = {
  show: boolean;
  text: string;
  type: string;
};

function useAlert() {
  const [alert, setAlert] = useState({ show: false, text: '', type: 'danger' });

  const showAlert = ({ text, type = 'danger' }: TShowAlert) => setAlert({ show: true, text, type });
  const hideAlert = () => setAlert({ show: false, text: '', type: 'danger' });

  return { alert, showAlert, hideAlert };
}
export default useAlert;
