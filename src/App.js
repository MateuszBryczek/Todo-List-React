import Form from "./Form";
import Tasks from "./Tasks";
import Buttons from "./Buttons";
import Section from "./Section";
import Container from "./Container";

const tasks = [
  {id: 1, content: "przejść na reacta", done: false},
  {id: 2, content: "zjeść obiad", done: true}
];
const hideDone = false;

function App() {
  return ( 
      <Container className="main__container">
        <h1>Lista zadań</h1>
        <Section title="Dodaj nowe zadanie" 
          body={<Form />}
        />

        <Section title ="Lista zadań"
          body={
          <Tasks tasks={tasks} hideDone={hideDone} />
        }
          extraHeaderContent={
          <Buttons tasks={tasks} hideDone={hideDone}/>
        }
          />
      </Container>
  );
}

export default App;
