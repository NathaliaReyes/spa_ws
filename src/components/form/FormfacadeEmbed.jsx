import React, { useEffect } from 'react';

const FormfacadeEmbed = ({ formFacadeURL, onSubmitForm }) => {
  useEffect(() => {
    const script = document.createElement('script');
    script.src = formFacadeURL;
    script.async = true;
    script.onload = () => {
      // Assuming Formfacade provides a callback or event for form submission
      window.addEventListener('formSubmit', onSubmitForm);
    };
    document.body.appendChild(script);

    return () => {
      document.body.removeChild(script);
      window.removeEventListener('formSubmit', onSubmitForm);
    };
  }, [formFacadeURL, onSubmitForm]);

  return <div id="ff-compose"></div>;
};

export default FormfacadeEmbed;