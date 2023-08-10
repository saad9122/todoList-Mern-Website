

export const sortTodos = (todos,sortBy) => {

    if(sortBy === "AtoZ") {
        return sortAtoZ(todos)

    } else if(sortBy === "ZtoA") {

        return sortAtoZ(todos).reverse()

    } else if (sortBy === "newToOld") {

        return sortBynewToOld(todos).reverse()
    } else  if(sortBy === "oldToNew") {

        return sortBynewToOld(todos)
    } else{
        return sortByDueDate(todos)
    }
}


const sortAtoZ = (todos) => {
    const sortedTdods = todos.slice().sort((a,b) => {

        const titleA = a.name.toLowerCase();
        const titleB = a.name.toLowerCase();

        if(titleA < titleB) {
            return -1
        }else if(titleA > titleB) {
            return 1
        }else {
            return 0
        }})

        return sortedTdods
    }

    const sortBynewToOld = (todos) => {

        const sortedTodos = todos.slice().sort((a,b) => Date.now(a.createdAt)-Date.now(b.createdAt))

        return sortedTodos
    }

    const sortByDueDate = (todos) => {

        const sortedTdods = todos.slice().sort((a,b) => Date.now(a.dueDate) - Date.now(b.dueDate))

        return sortedTdods
    } 