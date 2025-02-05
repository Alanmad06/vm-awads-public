// pages/auth/error.tsx
"use client";

import { useEffect } from "react";
import { useRouter } from "next/router";

export default function ErrorPage() {

  return (
    <div>
      <h1>Error de Autenticación</h1>
      <p>Hubo un problema con tu intento de autenticación.</p>
      <p>Detalles del error:</p>
    </div>
  );
}
