export const typeUser = `
  type User {
    id: ID!
    name: String
    age: Int
    pets: [Pet]
  }
`;

export const typeQueryUser = `
  extend type Query {
    allUsers: [User]
    userById(id:ID!): User
    findUsers(pattern: String): [User]!
  }
`;

export const typeMutationUser = `
  type Mutation {
    addUser(name:  String, age: Int): User
  }
`;
