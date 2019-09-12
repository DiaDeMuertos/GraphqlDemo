import { fakeDataBase } from '../../models';

const resolversUser = {
  Query: {
    allUsers: () => fakeDataBase.user,
    userById: (_, { id }) => fakeDataBase.user.find(value => value.id === parseInt(id, 10)),
  },
  User: {
    pets: user => fakeDataBase.pet.filter(pet => pet.userId === user.id),
  },
};

export default resolversUser;
