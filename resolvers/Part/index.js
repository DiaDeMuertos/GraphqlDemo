import { db } from '../../models';

const resolversPart = {
  Query: {
    allParts: () => db.sequelize.query('SELECT * FROM Part;').spread(rows => rows),
  },
};

export default resolversPart;
