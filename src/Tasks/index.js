import "./style.css";

const Tasks = (props) =>
    <ul className="tasks"></ul>
        {props.tasks.map(task => (
            <li 
            className={`tasks__item ${task.done && props.hideDoneTasks ? " tasks__item--hiden" : ""}`}
            >
                {task.content}
            </li>
        ))};

export default Tasks;
