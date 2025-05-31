import { faker } from '@faker-js/faker';

const createFakeContact = () => ({
  id: faker.string.uuid(),
  name: faker.person.fullName(),
  phone: faker.phone.number(),
  email: faker.internet.email(),
  jobTitle: faker.person.jobTitle(),
});

module.exports = createFakeContact;
