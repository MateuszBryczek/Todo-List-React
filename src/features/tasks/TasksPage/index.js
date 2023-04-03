import Form from "./Form";
import TaskList from "./TaskList";
import Buttons from "./Buttons";
import Section from "../../../common/Section";
import Container from "../../../common/Container";
import Search from "./Search";

function TasksPage() {
  
  return ( 
      <Container>
        <h1>Lista zadań</h1>
        <Section title="Dodaj nowe zadanie" 
          body={<Form />}
      />

        <Section title="Wyszukiwarka"
          body={<Search/>}
        />

        <Section title ="Lista zadań"
          body={<TaskList />}
          extraHeaderContent={<Buttons />}
        />
      </Container>
  );
}

export default TasksPage;
