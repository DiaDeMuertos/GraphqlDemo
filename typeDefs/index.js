import { typePet, typeQueryPet } from './Pet';
import { typeUser, typeQueryUser } from './User';
import { typeCar, typeQueryCar } from './Car';
import { typePart, typeQueryPart } from './Part';
import { typePurchase, typeQueryPurchase } from './Purchase';
import { typeWorkOrder, typeQueryWorkOrder } from './WorkOrder';

const typeDefs = [
  typeQueryPet,
  typeQueryUser,
  typePet,
  typeUser,
  typeCar,
  typeQueryCar,
  typePart,
  typeQueryPart,
  typePurchase,
  typeQueryPurchase,
  typeWorkOrder,
  typeQueryWorkOrder,
];

export default typeDefs;

/**
 * NOTA: El ultimo fue Work Order
 */
