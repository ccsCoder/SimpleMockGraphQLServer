import express from 'express';
import cors from 'cors';
import { schema } from './src/schema';

const http = require('http');


const PORT = 7800;
const app = express();
app.use('*', cors({ origin: 'http://localhost:7800' }));

schema.applyMiddleware({
    app,
});

// subscriptions
const httpServer = http.createServer(app);
schema.installSubscriptionHandlers(httpServer);


app.listen(PORT, () => {
    console.log(`GraphQL app is now running on http://localhost:${PORT}`)
    console.log(`🚀 Subscriptions ready at ws://localhost:${PORT}${schema.subscriptionsPath}`)
}
);

export default app;