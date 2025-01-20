import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import BasicExample from './MyNav';
import MyFooter from './MyFooter';
import Welcome from './Welcome';
import AllTheBooks from './AllTheBooks';

function App() {
  return (
    <div className="App">
      {/* Navbar */}
      <BasicExample />

      <header className="App-header">
        <div className="container py-5">
          {/* Welcome Section */}
          <Welcome />
        </div>
      </header>

      {/* Main Content: Book Collection */}
      <main className="container py-5">
        <h1 className="text-center mb-4">Book Collection</h1>
        <AllTheBooks />
      </main>

      {/* Footer */}
      <footer>
        <MyFooter />
      </footer>
    </div>
  );
}

export default App;
