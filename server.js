import express from 'express';
import cors from 'cors';

import { schema } from './src/schema';

const PORT = 7800;
const app = express();
app.use('*', cors({ origin: 'http://localhost:7800' }));

schema.applyMiddleware({
    app,
});

app.listen(PORT, () =>
  console.log(`GraphQL app is now running on http://localhost:${PORT}`)
);

export default app;