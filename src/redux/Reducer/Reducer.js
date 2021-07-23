


const initState = {
    todoList: [
        { id: Math.random(), title: "Task1", isDone: false },
        { id: Math.random(), title: "Task2", isDone: false },
        { id: Math.random(), title: "Task3", isDone: false },
    ]
}

const reducer =(state = initState, action) => {
    switch (action.type){
        case "ADD_TASK": return { todoList: [...state.todoList, action.payload]};
        case "DELETE_TASK" : return {   todoList : state.todoList
            .filter(task => task.id !== action.payload)     };
        case "COMPLETE_TASK" : return { todoList : state.todoList.map(
            task => task.id === action.payload ? {...task ,isDone : !task.isDone}:task
        ) };
        case "EDIT_TASK" : return {todoList : state.todoList.map(task => 
            task.id === action.payload.taskId ? {title: action.payload.newTitle}:task)}
        default : return (state);
    }

    

} 

export default reducer;