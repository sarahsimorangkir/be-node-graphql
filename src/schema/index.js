import { gql } from "apollo-server";
import * as todoSchema from "./todo/todoSchema.js";
import responseHeaderType from "./default/response_header.js";

var types = [responseHeaderType, todoSchema.types];
var mutations = [todoSchema.mutations];
var queries = [todoSchema.queries];
var inputs = [todoSchema.inputs];

const Schema = gql` 
    ${types.join("\n")}

    ${inputs.join("\n")}

    type Query {
        ${queries.join("\n")}
    }

    type Mutation {
        ${mutations.join("\n")}
    }
`;

export default Schema;
