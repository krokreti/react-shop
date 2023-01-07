import './App.css';
import CustomButton from './components/shared/CustomButton';
import Input from './components/shared/Input';
import { MdAndroid } from 'react-icons/md'
import { useState } from 'react';
import CustomLoadingButton from './components/shared/CustomLoadingButton';

function App() {
  const [loading, setLoading] = useState(false);

  const onChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    console.log(event.target.value)
  }

  const handleClick = () => {
    console.log('ta funcionando')
  }

  const handleLoader = () => {
    setLoading(!loading)
  }

  return (
    <div className="App">
      Teste
      <Input id='id' type='text' label='Login' onChange={onChange} variant={"outlined"} />
      <div>
        <CustomButton text='Send' onClick={handleClick} startIcon={<MdAndroid/>}/>
        <CustomLoadingButton loading={loading} text="Enviar" onClick={handleLoader}/>
      </div>
    </div>
  );
}

export default App;
