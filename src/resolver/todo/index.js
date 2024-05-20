let todos = [];

export const resolvers = {
    Query: {
        GetTodos: (ctx, param, {}) => {
            console.log(param);
            return {
                ResponseHeader: {
                    errMessage: "not implement yet",
                    status: true,
                },
                todos: [],
            };
        },
        GetTodoById: (ctx, param, {}) => {
            return {};
        }
    },
    Mutation: {
        InsertTodo: (ctx, param, {}) => {
            return {};
        }
    }
};
