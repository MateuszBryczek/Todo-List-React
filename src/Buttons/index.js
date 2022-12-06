import "./style.css";

const Buttons = ({tasks, hideDone}) => (
    <div className="buttons">
        {tasks.length > 0 && (
            <>
                <button onClick={toggleHideDone} className="buttons_button">
                    {hideDone ? "Pokaż" : "Ukryj "} 
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