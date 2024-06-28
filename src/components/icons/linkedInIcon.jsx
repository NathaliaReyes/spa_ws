import React from 'react';
import { FaLinkedinIn } from 'react-icons/fa';
import { Button } from "@/components/ui/button";  // Asegúrate de importar tu componente de botón correctamente

const LinkedinButtonIcon = () => (
  <Button className="w-10 h-10 flex items-center justify-center rounded-full bg-blue-600 hover:bg-blue-700">
    <FaLinkedinIn className="text-white" />
  </Button>
);

export default LinkedinButtonIcon;
