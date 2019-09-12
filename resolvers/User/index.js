import { fakeDataBase } from '../../models';

const resolversUser = {
  Query: {
    allUsers: () => fakeDataBase.user,
    userById: (_, user) => fakeDataBase.user.find(value => value.id === parseInt(user.id, 10)),
  },
  User: {
    pets: user => fakeDataBase.pet.filter(pet => pet.userId === user.id),
  },
  Mutation: {
    addUser(_, user) {
      const id = fakeDataBase.user.length + 1;
      const newUser = { ...user, id };
      return newUser;
    },
  },
};

export default resolversUser;
