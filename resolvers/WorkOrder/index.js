import { db } from '../../models';

const resolversPart = {
  Query: {
    allWorkOrders: () => db.sequelize.query('SELECT * FROM Work_Order;').spread(rows => rows),
  },
  WorkOrder: {
    purchase: workOrder => db.sequelize.query(`
      SELECT *
      FROM Purchase
      WHERE id=${workOrder.id};
    `).spread(rows => rows[0]),
  },
};

export default resolversPart;
