import { useRef } from 'react';

import ContactsService from '../../services/ContactsService';

export default function useNewContact() {
  const contactFormRef = useRef(null);

  async function handleSubmit(contact) {
    try {
      const response = await ContactsService.createContact(contact);

      contactFormRef.current.resetFields();
      console.log(response);
    } catch {
      alert('Ocorreu um erro ao cadastrar o contato');
    }
  }

  return {
    contactFormRef,
    handleSubmit,
  };
}
