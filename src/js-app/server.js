import express from 'express';
import { makeExecutableSchema } from 'graphql-tools';
import graphqlHTTP from 'express-graphql';
import resolvers from './resolvers';
import db from './models';
import typeDefs from './schema';
import cors from 'cors';
import path from 'path';

const app = express();
const port = process.env.PORT || 3001;

const schema = makeExecutableSchema({
  typeDefs,
  resolvers
});
app.use(express.static(path.join(__dirname, '/../client/build')));
app.use(cors());
app.use(
  '/graphql',
  graphqlHTTP({
    schema,
    rootValue: resolvers,
    context: { db },
    graphiql: true
  })
);

app.get('*', (req, res) => {
  res.sendFile(
    path.join(__dirname + '/../client/build/index.html')
  );
});

db.sequelize.sync({ alter: true, force: false }).then(() => {
  app.listen(port, () => {
    console.log(`Server is listening at http://localhost:${port}`);
  });
});
