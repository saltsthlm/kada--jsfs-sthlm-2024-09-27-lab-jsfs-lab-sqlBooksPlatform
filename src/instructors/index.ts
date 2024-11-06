import express from 'express';
import repository from './repository';

const router = express.Router();

router.get('/', (_req, res) => {
  const instructors = repository.list;

  res
    .json(instructors)
    .status(200)
    .end();
});

export default {
  router,
};
