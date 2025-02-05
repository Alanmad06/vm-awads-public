// pages/api/auth/error.tsx

import ProvidersComponent from "@/components/providers";



export default  function ErrorPage() {

  return (
    <div>
      <h1>Error de Autenticación</h1>
      <p>Hubo un problema con tu intento de autenticación. El error es: </p>
      <p>Para más detalles, verifica los logs del servidor.</p>
      <ProvidersComponent/>
    </div>
  );
}
