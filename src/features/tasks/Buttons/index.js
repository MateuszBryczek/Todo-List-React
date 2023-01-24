import { Button } from "./styled";
import {useSelector, useDispatch} from "react-redux";
import {toggleHideDone, setAllDone, selectHideDone, selectIsEveryTaskDone, selectAreTasksEmpty} from "../tasksSlice";

const Buttons = () => {
    const areTasksEmpty = useSelector(selectAreTasksEmpty);
    const isEveryTaskDone = useSelector(selectIsEveryTaskDone);
    const hideDone = useSelector(selectHideDone);

    const dispatch = useDispatch();

    return(
    <div>
        {!areTasksEmpty && (
            <>
                <Button 
                    onClick={() => dispatch(toggleHideDone())}>
                        {hideDone ? "Pokaż " : "Ukryj "} 
                        ukończone zadania
                </Button>
                
                <Button 
                    onClick={() => dispatch(setAllDone())}
                        disabled={isEveryTaskDone}
                        >
                        Ukończ wszystkie
                </Button>
            </> 
        )}
    </div>
)};

export default Buttons;