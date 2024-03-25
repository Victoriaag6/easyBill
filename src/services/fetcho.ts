import { URLS } from '../enums';
import { FetchOptions } from '../types';

const fetcho = async ({ url, method, body }: FetchOptions) => {
  try {
    const configPost = {
      method: 'POST',
      credentials: 'include' as const,
      mode: 'no-cors' as const,
      headers: {
        'Content-Type': 'application/json',
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
    const data = await response.json();
    console.log(data);

    // if (data?.errorSession) {
    //   console.log('No hay sesion activa');
    // return false
    // }

    return data;
  } catch (error) {
    console.error(
     'Ocurrio un error'
    );
    return false;
  }
};

export default fetcho;
