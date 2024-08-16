import { useState, useEffect } from 'react';
import emailjs from 'emailjs-com';

const EmailForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  useEffect(() => {
    emailjs.init(import.meta.env.VITE_APP_USER_ID);
  }, []);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prevState => ({
      ...prevState,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    emailjs.send(
      import.meta.env.VITE_APP_SERVICE_ID,
      import.meta.env.VITE_APP_TEMPLATE_ID,
      formData
    )
    .then((result) => {
      console.log(result.text);
      alert('Message envoyé avec succès !');
      setFormData({ name: '', email: '', message: '' });
    }, (error) => {
      console.log(error.text);
      alert('Une erreur s\'est produite, veuillez réessayer.');
    });
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        name=" name"
        placeholder="Votre nom"
        value={formData.name}
        onChange={handleInputChange}
        required
      />
      <input
        type="email"
        name="email"
        placeholder="Votre email"
        value={formData.email}
        onChange={handleInputChange}
        required
      />
      <textarea
        name="message"
        placeholder="Votre message"
        value={formData.message}
        onChange={handleInputChange}
        required
      ></textarea>
      <button type="submit">Envoyer</button>
    </form>
  );
};

export default EmailForm;