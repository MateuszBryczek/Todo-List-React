import { List, TasksItem, TasksContent, TasksButton } from "./styled";

const TaskList = ({tasks, hideDone, removeTask, toggleTaskDone}) =>
    <List>
        {tasks.map(task => (
            <TasksItem
            key={task.id}
            hidden={task.done && hideDone}
            >
                <TasksButton toggleDone
                onClick={() => toggleTaskDone(task.id)}
                >
                    {task.done ? "✔" : ""}
                </TasksButton>

                <TasksContent done={task.done}>
                    {task.content}
                </TasksContent>

                <TasksButton remove
                onClick={() => removeTask(task.id)}
                >
                    🗑
                </TasksButton>
            </TasksItem>
        ))}
    </List>

export default TaskList;
