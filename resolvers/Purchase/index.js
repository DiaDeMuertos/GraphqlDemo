import { db } from '../../models';
import { rowToJson } from '../../lib/helper';

const resolversPurchase = {
  Query: {
    allPurchases: () => db.sequelize.query(`
      SELECT (
        SELECT
        po.id, po.code, po.createdAt, po.updatedAt,
        (
          SELECT p.id, p.code, p.createdAt, p.createdAt FROM Part AS p
          INNER JOIN P_PO AS p_po ON p.id = p_po.part_id
          WHERE po.id = p_po.po_id
          FOR JSON AUTO
        ) AS parts
        FROM Purchase AS po
        FOR JSON AUTO
      ) AS json;
    `).spread(rowToJson),
  },
};
export default resolversPurchase;
