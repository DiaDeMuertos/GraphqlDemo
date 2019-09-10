import Sequelize from 'sequelize';

const DATABASE = 'playground';
const USER = 'sa';
const PASSWORD = '64ce!J)9(((\\gw$f';

const CONFIG = {
  host: 'localhost',
  dialect: 'mssql',
  operatorsAliases: false,
};

const sequelize = new Sequelize(DATABASE, USER, PASSWORD, CONFIG);

export const db = {
  sequelize,
};

export const fakeDataBase = {
  user: [{ id: 1, name: 'cesar', age: 38 }, { id: 2, name: 'julio', age: 38 }, { id: 3, name: 'Fabian', age: 25 }],
  pet: [
    {
      id: 1,
      name: 'ronico',
      age: 15,
      userId: 1,
    },
    {
      id: 2,
      name: 'mika',
      age: 4,
      userId: 1,
    },
  ],
  car: [{ id: 1, model: 'A' }, { id: 2, model: 'B' }],
};
