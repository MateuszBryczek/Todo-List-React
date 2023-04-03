import { Button } from "./styled";
import { useSelector, useDispatch } from "react-redux";
import {
    toggleHideDone,
    setAllDone,
    selectHideDone,
    selectIsEveryTaskDone,
    selectAreTasksEmpty,
    fetchExampleTasks,
} from "../../tasksSlice";

const Buttons = () => {
    const areTasksEmpty = useSelector(selectAreTasksEmpty);
    const isEveryTaskDone = useSelector(selectIsEveryTaskDone);
    const hideDone = useSelector(selectHideDone);

    const dispatch = useDispatch();

    return (
        <div>
            <Button onClick={() => dispatch(fetchExampleTasks())}>
                Pobierz przykładowe zadania
            </Button>
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
    )
};

export default Buttons;