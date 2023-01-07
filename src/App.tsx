import './App.css';
import Input from './components/shared/Input';

function App() {

  const onChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    console.log(event.target.value)
  }

  return (
    <div className="App">
      Teste
      <Input id='id' type='text' label='Login' onChange={onChange} variant={"outlined"} />
    </div>
  );
}

export default App;
