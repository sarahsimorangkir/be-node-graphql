import {resolvers as todoResolvers} from "./todo/index.js";

const resolvers = {
    Query: {
        ...todoResolvers.Query,
    },
    Mutation: {
        ...todoResolvers.Mutation,
    }
};

export default resolvers;