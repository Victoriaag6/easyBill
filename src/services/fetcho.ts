import { URLS } from '../enums';
import { FetchOptions } from '../types';

const fetcho = async ({ url, method, body, headers = '' }: FetchOptions) => {
  try {
    const configPost = {
      method: 'POST',
      credentials: 'same-origin' as const,
      mode: 'cors' as const,
      headers: {
        'Content-Type': 'application/json',
        headers,
      },
      body: JSON.stringify(body),
    };

    const configGet = {
      method: 'GET',
      credentials: 'same-origin' as const,
      mode: 'cors' as const,
    };

    const config = method.toLowerCase() === 'post' ? configPost : configGet;

    const response = await fetch(`${URLS.URL_BASE}${url}`, config);

    if (!response.ok) throw new Error('Error en la peticion');

    const data = await response.json();

    //! Cambiar esto por error de credenciales
    // if (data?.errorSession) {
    //   console.log('No hay sesion activa');
    // return false
    // }

    return data;
  } catch (error) {
    console.error('Ocurrio un error');
    console.error(error);
    return false;
  }
};

export default fetcho;
