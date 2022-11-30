import "./style.css";

const Buttons = ({tasks, hideDoneTasks}) => (
    <div className="buttons">
        {tasks.length > 0 && (
            <>
                <button class="buttons_button">
                    {hideDoneTasks ? "Pokaż" : "Ukryj "} 
                    ukończone zadania
                </button>
                <button className="buttons_button"
                    disabled={tasks.every(({ done }) => done )}
                    >
                    Ukończ wszystkie
                </button>
            </> 
        )}
    </div>
);

export default Buttons;