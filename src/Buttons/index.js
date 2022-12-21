import Button from "./styled"

const Buttons = ({tasks, hideDone, toggleHideDone, setAllDone}) => (
    <div className="buttons">
        {tasks.length > 0 && (
            <>
                <Button 
                    onClick={toggleHideDone}>
                        {hideDone ? "Pokaż " : "Ukryj "} 
                        ukończone zadania
                </Button>
                
                <Button 
                    onClick={setAllDone}
                        disabled={tasks.every(({ done }) => done )}
                        >
                        Ukończ wszystkie
                    </Button>
            </> 
        )}
    </div>
);

export default Buttons;