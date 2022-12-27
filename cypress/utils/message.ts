import { faker } from '@faker-js/faker';

export type Message = {
    firstName: string,
    lastName: string,
    email: string,
    subject: string,
    text: string
}

export const getRandomMessage = (): Message => {
    return {
        firstName: faker.name.firstName(),
        lastName: faker.name.lastName(),
        email: faker.internet.email(),
        subject: faker.lorem.paragraph().substring(0, 20),
        text: faker.lorem.paragraph()
    }
}