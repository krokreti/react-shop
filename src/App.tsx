import './App.css';
import CustomButton from './components/shared/CustomButton';
import Input from './components/shared/Input';
import { MdAndroid } from 'react-icons/md'

function App() {

  const onChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    console.log(event.target.value)
  }

  const handleClick = () => {
    console.log('ta funcionando')
  }

  return (
    <div className="App">
      Teste
      <Input id='id' type='text' label='Login' onChange={onChange} variant={"outlined"} />
      <div>
        <CustomButton text='Send' onClick={handleClick} startIcon={<MdAndroid/>}/>

      </div>
    </div>
  );
}

export default App;
