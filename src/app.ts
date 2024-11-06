import express, { Express } from 'express';
import { createDatabase } from './db';
import { createTablesAndSeedData } from './authors/db-seed';
import { createAuthorService } from './authors/service';
import { createAuthorsRouter } from './authors/router';

const app: Express = express();
const port = 3001;

(async() => {
    const client = await createDatabase();
    client.query(createTablesAndSeedData());

    const service = createAuthorService(client);
    const authorRouter = createAuthorsRouter(service);

    app.use('/api/authors', authorRouter);

    const authors = await service.getById("1")
    console.log(authors);
    
})();

app.listen(port, () => console.log(`Example app listening at http://localhost:${port}`));

