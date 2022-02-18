function newTask(title, description) {
  const task = {
    title: title,
    description: description,
    complete: false,
    // Print the state of a task to the console in a nice readable way
    logState: function() {
      console.log(`${this.title} has${this.complete ? " " : " not "}been completed`);
    },
    // Mark a task as complete
    markCompleted: function() {
      this.complete = true;
    }
  };
  return task;
}

// DRIVER CODE BELOW

const task1 = newTask("Clean Cat Litter", "Take all the 💩 out to the litter box");
const task2 = newTask("Do Laundry", "😨");
//const task1 = newTask("Clean Cat Litter", "Take all the 💩 out to the litter box");
const tasks = [task1, task2];

task1.logState(); // Clean Cat Litter has not been completed
task1.markCompleted();
task1.logState(); // Clean Cat Litter has been completed

console.log(tasks);

