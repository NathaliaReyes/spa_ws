import React from 'react';
import { FaInstagram } from 'react-icons/fa';
import { Button } from "@/components/ui/button";  // Asegúrate de importar tu componente de botón correctamente

const InstagramButtonIcon = () => (
  <Button className="w-10 h-10 flex items-center justify-center rounded-full bg-gradient-to-r from-purple-400 to-pink-500 hover:from-pink-500 hover:to-purple-400">
    <FaInstagram className="text-white" />
  </Button>
);

export default InstagramButtonIcon;
