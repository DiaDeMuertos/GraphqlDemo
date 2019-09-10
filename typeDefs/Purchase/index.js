export const typePurchase = `
  type Purchase {
    id: ID!
    code: String
    parts: [Part]
    createdAt: String
    updatedAt: String
  }
`;

export const typeQueryPurchase = `
  extend type Query {
    allPurchases: [Purchase]
  }
`;
