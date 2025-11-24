import { faker } from "@faker-js/faker";

export type PersonType = {
  name: string;
  email: string;
  country: string;
};

const newPerson = () => {
  return {
    name: faker.person.fullName(),
    email: faker.internet.email(),
    country: faker.location.country(),
  } satisfies PersonType;
};
export const getPeople = (count: number = 5) => {
  return Array.from({ length: count }, newPerson);
};
