import React from 'react';
import { FaFacebookF } from 'react-icons/fa';
import { Button } from "@/components/ui/button";  // Asegúrate de importar tu componente de botón correctamente

const FacebookIcon = () => (
  <Button className="w-10 h-10 flex items-center justify-center rounded-full bg-blue-500 hover:bg-blue-600">
    <FaFacebookF className="text-white" />
  </Button>
);

export default FacebookIcon;
