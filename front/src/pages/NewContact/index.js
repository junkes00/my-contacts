import { useRef } from 'react';

import PageHeader from '../../components/PageHeader';

import ContactForm from '../../components/ContactForm';

import ContactsService from '../../services/ContactsService';

export default function NewContact() {
  const contactFormRef = useRef(null);

  async function handleSubmit(formData) {
    try {
      const contact = {
        ...formData,
        category_id: formData.categoryId,
      };

      const response = await ContactsService.createContact(contact);

      contactFormRef.current.resetFields();
      console.log(response);
    } catch {
      alert('Ocorreu um erro ao cadastrar o contato');
    }
  }

  return (
    <>
      <PageHeader title="Novo contato" />
      <ContactForm
        ref={contactFormRef}
        buttonLabel="Cadastrar"
        onSubmit={handleSubmit}
      />
    </>
  );
}
