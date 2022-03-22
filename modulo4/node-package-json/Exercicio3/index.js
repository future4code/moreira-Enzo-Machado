const taskList = [
    "Lavar a louça",
    "Comprar sabão"
];

const newTask = process.argv[2];
taskList.push(newTask);

console.log("Tarefa adicionada!")

console.log(taskList)