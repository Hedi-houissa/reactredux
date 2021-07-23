
// add
export const addTask = payload => {
    return {
        type: "ADD_TASK",
        payload
    }
}

// delete
export const deleteTask = payload => {
    return {
        type: "DELETE_TASK",
        payload
    }
}

// complete
export const completeTask = payload => {
    return {
        type: "COMPLETE_TASK",
        payload
    }
}

// edit
export const editTask = (taskId, newTitle) => {
    return {
        type: "EDIT_TASK",
        payload: { taskId, newTitle }
    }
}

// // done
// export const filterDone = () => {
//     return {
//         type: "FILTER_DONE"
        
//     }
// }
// // undone
// export const filterUndone = () => {
//     return {
//         type: "FILTER_UNDONE"
        
//     }
// }
// // all
// export const filterAll = () => {
//     return {
//         type: "FILTER_ALL"
        
//     }
// }
