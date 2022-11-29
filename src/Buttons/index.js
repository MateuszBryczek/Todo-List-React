import "./style.css";

const Buttons = ({tasks, hideDoneTasks}) => {
    if(tasks.length ===0){
        return null;
    }

    return (
        <div className="buttons">
            <button className="buttons_button">
                {hideDoneTasks ? "Pokaż" : "Ukryj "} 
                    ukończone zadania
            </button>
            <button className={
                `buttons_button ${tasks.every(({ done }) => done ) ? " disabled" : ""}`}>
                Ukończ wszystkie
            </button>
        </div>
    )
};

export default Buttons;