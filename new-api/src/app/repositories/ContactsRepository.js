const contacts = [
  {
    id: crypto.randomUUID(),
    name: 'Nicolas',
    email: 'nicolas@mail.com',
    phone: '123131212',
    category_id: crypto.randomUUID(),
  },
];

class ContactsRepository {
  findAll() {
    return new Promise((resolve) => {
      resolve(contacts);
    });
  }
}

module.exports = new ContactsRepository();
