import Form from "./Form";
import Tasks from "./Tasks";

const tasks = [
  {id: 1, content: "przejść na reacta", done: false},
  {id: 2, content: "zjeść obiad", done: true}
];
const hideDoneTasks = false;

function App() {
  return (
    <div className="App">
      <main className="main">
        <h1>Lista zadań</h1>
        <section className="section">
            <h2 className="section__header">Dodaj nowe zadanie</h2>
            <Form />
        </section>
        <section className="section">
            
            <h2 className="section__header">Lista zadań</h2>
            <div className="buttons__container">
                <button className="buttons">Ukryj ukończone</button>
                <button className="buttons">Ukończ wszystkie</button>
            </div>
            <Tasks tasks={tasks} hideDoneTasks={hideDoneTasks} />
        </section>
      </main>
    </div>
  );
}

export default App;
