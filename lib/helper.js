import { omit } from 'ramda';

const extractQuery = values => values.map(value => value.Query);

const accuAndValueQuery = (accu, value) => ({ ...accu, ...value });
const accuAndValueNoQuery = (accu, value) => ({ ...accu, ...omit(['Query'], value) });

export const mergeQuery = values => extractQuery(values).reduce(accuAndValueQuery, {});
export const mergeNoQuery = values => values.reduce(accuAndValueNoQuery, {});

export const merge = (...values) => ({ Query: { ...mergeQuery(values) }, ...mergeNoQuery(values) });

export const rowToJson = value => JSON.parse(value[0].json) || [];