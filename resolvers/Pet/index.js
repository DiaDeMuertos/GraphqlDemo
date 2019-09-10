import { fakeDataBase } from '../../models';

const resolversPet = {
  Query: {
    allPets: () => fakeDataBase.pet,
  },
};

export default resolversPet;
