export const typeWorkOrder = `
  type WorkOrder {
    id: ID!
    code: String
    purchase: Purchase
    createdAt: String
    updatedAt: String
  }
`;

export const typeQueryWorkOrder = `
  type Query {
    allWorkOrders: [WorkOrder]
  }
`;
