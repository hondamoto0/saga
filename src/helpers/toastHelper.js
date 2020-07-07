import { toast } from 'react-toastify';

export const toastError = error => {
  let message = null;
  if (typeof error === 'object' && error !== null && error !== '') {
    ({ message } = error);
  }
  if (message !== null && typeof message === 'string' && message !== '') {
    toast.error(message);
  }
};
