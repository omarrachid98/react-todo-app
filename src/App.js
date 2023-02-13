import logo from './logo.svg';
import './App.css';
import { useState } from 'react';
import Form from './components/Form.tsx';
import Items from './components/Items.tsx';

function App() {

  const [name, setName] = useState('');
  const [items, setItems] = useState([]);
  
  const handleNameChange = (e) => {
    setName(e.target.value)
  }

  const handleButtonClick = () => {
    setItems([...items, name]);
    setName('');
  }

  const handleRemoveItems = (value) => {
    setItems(items.filter(item => item !== value));
}

  return (
    <div className="App">
      <img src={logo} className="App-logo" alt="logo" />
      <h1 className="text-3xl font-bold underline">
        React To do App!
      </h1>
      <Form 
        name={name}
        onNameChange={handleNameChange}
        onClickButton={handleButtonClick}
      />
      {items.length > 0 ?
        <Items 
          lists={items}
          onRemoveItem={handleRemoveItems}
        />
      :
      <p> Nessuna attività </p> 
      }
    </div>
  );
}

export default App;
