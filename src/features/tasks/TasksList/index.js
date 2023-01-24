import { List, TasksItem, TasksContent, TasksButton } from "./styled";
import {useSelector, useDispatch} from "react-redux";
import { selectTasks, toggleTaskDone, removeTask, selectHideDone } from "../tasksSlice"

const TasksList = () => {
    const tasks = useSelector(selectTasks);
    const hideDone = useSelector(selectHideDone);

    const dispatch = useDispatch();

    return (
    <List>
        {tasks.map(task => (
            <TasksItem
            key={task.id}
            hidden={task.done && hideDone}
            >
                <TasksButton toggleDone
                onClick={() => dispatch(toggleTaskDone(task.id))}
                >
                    {task.done ? "✔" : ""}
                </TasksButton>

                <TasksContent done={task.done}>
                    {task.content}
                </TasksContent>

                <TasksButton remove
                onClick={() => dispatch(removeTask(task.id))}
                >
                    🗑
                </TasksButton>
            </TasksItem>
        ))}
    </List>
    )};

export default TasksList;
