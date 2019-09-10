import resolversPet from './Pet';
import resolversUser from './User';
import resolversCar from './Car';
import resolversPart from './Part';
import resolversPurchase from './Purchase';
import resolversWorkOrder from './WorkOrder';
import { merge } from '../lib/helper';

const resolvers = {
  ...merge(
    resolversPet,
    resolversUser,
    resolversCar,
    resolversPart,
    resolversPurchase,
    resolversWorkOrder,
  ),
};

export default resolvers;
