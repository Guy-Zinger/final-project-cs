import './App.css';
import Header from './components/Header';
import LoginForm from './components/LoginForm';
function App() {
  return (
    <div className='container'>
     <Header title = 'Recipes Helper' />
     <LoginForm />

    </div>
  );
}

export default App;
