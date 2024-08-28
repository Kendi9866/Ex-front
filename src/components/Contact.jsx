import React, { useState } from 'react';

function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: 'dúvida',
    message: '',
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.message) {
      alert('Por favor, preencha todos os campos obrigatórios.');
      return;
    }
    alert('Formulário enviado com sucesso!');
    setFormData({
      name: '',
      email: '',
      subject: 'dúvida',
      message: '',
    });
  };

  return (
    <section className="p-4 bg-white shadow-md rounded-md">
      <h2 className="text-2xl font-bold mb-4 text-center">Formulário</h2>
      <form onSubmit={handleSubmit}>
        <label className="block mb-2">Nome:</label>
        <input
          type="text"
          name="name"
          value={formData.name}
          onChange={handleChange}
          className="w-full p-2 mb-4 border rounded-md"
          required
        />

        <label className="block mb-2">Email:</label>
        <input
          type="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
          className="w-full p-2 mb-4 border rounded-md"
          required
        />

        <label className="block mb-2">Assunto:</label>
        <select
          name="subject"
          value={formData.subject}
          onChange={handleChange}
          className="w-full p-2 mb-4 border rounded-md"
        >
          <option value="dúvida">Dúvida</option>
          <option value="suporte">Suporte</option>
          <option value="outros">Outros</option>
        </select>

        <label className="block mb-2">Mensagem:</label>
        <textarea
          name="message"
          value={formData.message}
          onChange={handleChange}
          className="w-full p-2 mb-4 border rounded-md"
          required
        ></textarea>

        <button
          type="submit"
          className="w-full bg-gray-800 text-white p-2 rounded-md hover:bg-gray-600"
        >
          Enviar
        </button>
      </form>
    </section>
  );
}

export default Contact;
