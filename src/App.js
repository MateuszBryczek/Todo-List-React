import {useEffect, useState} from 'react';
import Form from "./Form";
import Tasks from "./Tasks";
import Buttons from "./Buttons";
import Section from "./Section";
import Container from "./Container";

function App() {
  const [hideDone, setHideDone] = useState(false);

  const getTasks = () => {
    const tasksFromLocalStorage = localStorage.getItem("tasks"); 

    return tasksFromLocalStorage
      ? JSON.parse(tasksFromLocalStorage)
      : [];
  };

  const [tasks, setTasks] = useState(getTasks);

  useEffect(() => {
    localStorage.setItem("tasks", JSON.stringify(tasks));
  }, [tasks]);

  const toggleHideDone = () => {
    setHideDone(hideDone => !hideDone);
  };

  const removeTask = (id) => {
    setTasks(tasks => tasks.filter(task => task.id !== id));
  };

  const toggleTaskDone = (id) => {
    setTasks(tasks => tasks.map(task => {
      if(task.id === id) {
        return { ...task, done: !task.done };
      }
        return task;
    }));
  }

  const setAllDone = () => {
    setTasks(tasks => tasks.map(task => ({
      ...task, 
      done: true,
    })));
  };

    const addNewTask = (content) => {
      setTasks(tasks => [
        ...tasks,
        {
          content,
          done: false,
          id: tasks.length === 0 ? 1 : tasks[tasks.length - 1].id + 1,
        },
      ]);
    };



  return ( 
      <Container className="main__container">
        <h1>Lista zadań</h1>
        <Section title="Dodaj nowe zadanie" 
          body={<Form addNewTask={addNewTask}/>}
        />

        <Section title ="Lista zadań"
          body={
          <Tasks tasks={tasks} 
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

export default App;
