export const typePart = `
  type Part {
    id: ID!
    code: String
    createdAt: String
    updatedAt: String
  }
`;

export const typeQueryPart = `
  extend type Query {
    allParts: [Part]
  }
`;
