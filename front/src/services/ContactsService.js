import HttpClient from './utils/HttpClient';

class ContactsService {
  constructor() {
    this.httpClient = new HttpClient('http://localhost:3001');
  }

  async listContacts(orderBy = 'asc') {
    return this.httpClient.get(`/contacts/cc7d7148-2bb7-444b-a426-cd741c596338?orderBy=${orderBy}`);
  }
}

export default new ContactsService();
