export function obtainDataForm(e: Event) {
  e.preventDefault();

  const target = e.target as HTMLFormElement;

  const formData = new FormData(target);

  const valor: { [key: string]: FormDataEntryValue } = {};
  formData.forEach((value, key) => {
    valor[key] = value;
  });

  return valor;
}
