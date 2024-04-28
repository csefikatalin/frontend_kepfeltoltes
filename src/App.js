
import FormComponet from "./components/FormComponet";
import Megjelenit from "./components/Megjelenit";
function App() {
  return (
    <div className="App">
      <header className="p-2 text-center">
        <h1>Képfeltöltés React - Laravel</h1>
      </header>
      <article>
  <FormComponet />
  <Megjelenit />
      </article>
      <footer></footer>
    </div>
  );
}

export default App;
