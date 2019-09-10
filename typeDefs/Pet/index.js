export const typePet = `
  type Pet {
    id: ID!
    name: String
    age: Int
  }
`;

export const typeQueryPet = `
  extend type Query {
    allPets: [Pet]
  }
`;
