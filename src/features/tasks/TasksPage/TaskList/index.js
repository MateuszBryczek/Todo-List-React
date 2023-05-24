import { List, TasksItem, TasksContent, TasksButton, StyledLink } from "./styled";
import {useSelector, useDispatch} from "react-redux";
import { selectTasksByQuery, toggleTaskDone, removeTask, selectHideDone } from "../../tasksSlice"
import { toTask } from "../../../../routes";
import { useQueryParameter } from "../queryParameters";
import searchQueryParamName from "../searchQueryParamName";

const TasksList = () => {
    const query = useQueryParameter(searchQueryParamName);
    const tasks = useSelector(state => selectTasksByQuery(state, query));
    const hideDone = useSelector(selectHideDone);

    const dispatch = useDispatch();

    return (
    <List>
        {tasks.map(task => (
            <TasksItem
            key={task.id}
            hidden={task.done && hideDone}
            >
                <TasksButton 
                    toggleDone
                    onClick={() => dispatch(toggleTaskDone(task.id))}
                >
                    {task.done ? "✔" : ""}
                </TasksButton>

                <TasksContent done={task.done}>
                    <StyledLink to={toTask({ id: task.id })}>
                        {task.content}
                    </StyledLink>
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
