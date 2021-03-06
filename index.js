import express from 'express';
import graphqlHTTP from 'express-graphql';
import schema from "./schema";

const app = express();

app.get('/', (req, res) => {
    res.send('Initial Endpoint');
});

const root = { friend : () => {
        return  {
            "id" : 12312312,
            "firstName" : "Ma"
        }
    }
};

app.use('/graphql', graphqlHTTP({
    schema: schema,
    rootValue: root,
    graphiql: true
}));

app.listen(8080, () => console.log('Running server'));
