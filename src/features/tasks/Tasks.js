import {useState} from 'react';
import Form from "./Form";
import Tasks from "./TaskList";
import Buttons from "./Buttons";
import Section from "../../common/Section";
import Container from "../../common/Container";
import { useTasks } from "./TaskList/useTasks"

function Tasks() {
  const [hideDone, setHideDone] = useState(false);

  const toggleHideDone = () => {
    setHideDone(hideDone => !hideDone);
  };

    const {
      tasks,
      removeTask,
      toggleTaskDone,
      setAllDone,
      addNewTask,
    } = useTasks();

  return ( 
      <Container>
        <h1>Lista zadań</h1>
        <Section title="Dodaj nowe zadanie" 
          body={<Form addNewTask={addNewTask}/>}
        />

        <Section title ="Lista zadań"
          body={
          <Tasks 
          tasks={tasks} 
          hideDone={hideDone} 
          removeTask={removeTask}
          toggleTaskDone={toggleTaskDone}
          />
        }
          extraHeaderContent={
          <Buttons 
          tasks={tasks} 
          hideDone={hideDone} 
          toggleHideDone={toggleHideDone}
          setAllDone={setAllDone}
          />
        }
          />
      </Container>
  );
}

export default Tasks;
