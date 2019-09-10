import { fakeDataBase } from '../../models';

const resolversCar = {
  Query: {
    allCars: () => fakeDataBase.car,
  },
};

export default resolversCar;
