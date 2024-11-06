/* eslint-disable no-console */
import express, { Express } from 'express';

import instructors from './instructors';

const app: Express = express();
const port = 3001;

app.use('/api/instructors', instructors.router);

app.listen(port, () => console.log(`Example app listening at http://localhost:${port}`));
