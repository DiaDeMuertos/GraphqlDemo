export const typeCar = `
  type Car {
    id: ID!
    model: String
  }
`;

export const typeQueryCar = `
  extend type Query {
    allCars: [Car]
  }
`;
