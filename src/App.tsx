import Login from '../src/components/Login';
import Nav from './components/Nav';


function App() {
  return (
    <>
    <div>
      <Nav />
    </div>
    <div className="flex flex-col items-center justify-center min-h-screen mt-4">
      <Login />
    </div></>
   
  );
}

export default App;
