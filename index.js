import express from 'express';
import graphqlHTTP from 'express-graphql';
import schema from './schema'
import resolvers from './resolver';

const root = resolvers;
const app = express();

app.get('/',(req,res)=>{
     res.send('Todo bien por el momento');
});

app.use('/graphql',graphqlHTTP({
        schema ,
        rootValue: root,
        graphiql: true
}));

app.listen(4500,()=>{
    console.log('El Servidor esta funcionando, pdt: no te olvides del -> ;')
});