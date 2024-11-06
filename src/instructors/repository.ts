import db from './db';

// import package 'pg' here and get the connection from the connection pool
// see pg docs
// https://node-postgres.com/features/connecting
// https://node-postgres.com/features/pooling


/**
 * The pool has to be created only once (new Pool()) but can be connected and released as
 * many times as you want
 */

/**
 * We're using a hardcoded instructors list below, this should come from the database
 * using SQL instead
 */

const list = () => db.instructors();

export default {
  list,
};
