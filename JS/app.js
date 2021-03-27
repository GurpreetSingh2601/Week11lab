let todolist = [{ todo: "clone repo for starter code", status: "complete" }, { todo: "release proper commoit messages at regular intervals", status: "started" }]
completedtodos = []

for (i = 0; i < todolist.length; i++) {

    if (todolist[i].status === "complete") {

        completedtodos.push(todolist[i])

    }
}

console.log(completedtodos)
//for loop to loop over completedtodos array
for (j = 0; j < completedtodos.length; j++) {
    const [{ todo }] = completedtodos
    console.log(todo)
}
