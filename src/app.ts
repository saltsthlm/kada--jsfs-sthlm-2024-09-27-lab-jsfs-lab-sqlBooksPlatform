import express, { Express } from 'express';

import instructors from './instructors';
import { createDatabase } from './db';
import { createTablesAndSeedData } from './authors/db-seed';
import { createAuthorService } from './authors/service';

const app: Express = express();
const port = 3001;

(async() => {
    const client = await createDatabase();
    client.query(createTablesAndSeedData());

    const service = await createAuthorService(client);
    const authors = await service.getAll()
    console.log(authors);
    
})();


app.use('/api/instructors', instructors.router);

app.listen(port, () => console.log(`Example app listening at http://localhost:${port}`));
