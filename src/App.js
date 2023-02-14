import logo from './logo.svg';
import './App.css';
import { useState } from 'react';
import Form from './components/Form.tsx';
import Items from './components/Items.tsx';
import Filters from './components/Filters.tsx';

function App() {

  const [name, setName] = useState('');
  const [items, setItems] = useState([]);
  const [messages, setMessages] = useState('');
  const [filters, setFilters] = useState('all')
  
  const handleNameChange = (e) => {
    setName(e.target.value)
  }

  const handleButtonClick = () => {
    if(!name) {
      setMessages(`Devi prima inserire l'attività!`);
      return;
    }

    setItems([...items, name]);
    setMessages('');
    setName('');
  }

  const handleRemoveItems = (value) => {
    setItems(items.filter(item => item !== value));
  }
  
  return (
    <div className="App">
      <img src={logo} className="App-logo" alt="logo" />
      <h1 className="text-3xl font-bold text-black">
        React To do App!
      </h1>
      <Form 
        name={name}
        onNameChange={handleNameChange}
        onClickButton={handleButtonClick}
      />
      {messages && (
         <p className='text-red-900 font-bold'> {messages} </p> 
      )}
      {items.length > 0 ?
      <>
        {/* <Filters 
          setFilters={setFilters}
        /> */}
        <Items 
          lists={items}
          onRemoveItem={handleRemoveItems}
          filter={filters}
        />
        </>
      :
      <p className='text-black'> Nessuna attività </p> 
      }
    </div>
  );
}

export default App;
