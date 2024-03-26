import Swal from 'sweetalert2';

class ModalsCustoms {
  static error({ text = 'Something went wrong!' }: { text: string }) {
    Swal.fire({
      icon: 'error',
      title: 'Oops...',
      text,
    });
  }

  static success({ text = 'Success!' }: { text: string }) {
    Swal.fire({
      icon: 'success',
      title: 'Good job!',
      text,
    });
  }
}

export default ModalsCustoms;
