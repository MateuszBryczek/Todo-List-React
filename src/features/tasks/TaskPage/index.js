import Section from "../../../common/Section";
import Container from "../../../common/Container";
import { useParams } from "react-router-dom";
import { getTaskById } from "../tasksSlice";
import { useSelector } from "react-redux";

function TaskPage() {
    const {id}= useParams();
    const task = useSelector(state => getTaskById(state, id));

  return ( 
      <Container>
        <h1>Szczegóły zadania</h1>
        <Section title={task ? task.content : "Nie znaleziono zadania"} 
          body={!!task && (
          <>
            <strong>Ukończone:</strong>: {task.done ? "Tak" : "Nie"}
          </>
        )}
        />

        
      </Container>
  );
}

export default TaskPage;