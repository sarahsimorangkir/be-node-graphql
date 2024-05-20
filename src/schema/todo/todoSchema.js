
export const types = `
    type ToDo {
        id: String
        todo_text : String
    }

    type GetTodosResponse {
        ResponseHeader: ResponseHeader
        todos: [ToDo]
    }
    
    type GetTodoByIdResponse {
        ResponseHeader: ResponseHeader
        todo: ToDo
    }

    type InsertTodoResponse {
        ResponseHeader: ResponseHeader
        todo_id: String
    }
`;

export const inputs = `
    input GetTodoByIdParam {
        todo_id: String
    }

    input GetTodosParam {
        page: Int
        per_page: Int
    }

    input InsertTodoParam {
        todo_id: String
        text: String
    }
`;

export const queries = `
    GetTodoById(param: GetTodoByIdParam): GetTodoByIdResponse 
    GetTodos(param: GetTodosParam): GetTodosResponse
`; 

export const mutations = `
    InsertTodo(param: InsertTodoParam): InsertTodoResponse
`;