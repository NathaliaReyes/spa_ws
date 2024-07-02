import React from 'react';
import { FaWhatsapp } from 'react-icons/fa';
import { Button } from "@/components/ui/button";  // Asegúrate de importar tu componente de botón correctamente

const WhatsAppIcon = () => (
  <a href="https://wa.me/18134686878" target="_blank" rel="noopener noreferrer">
    <Button className="w-10 h-10 flex items-center justify-center rounded-full bg-green-500 hover:bg-green-600">
      <FaWhatsapp className="text-white" />
    </Button>
  </a>
);

export default WhatsAppIcon;