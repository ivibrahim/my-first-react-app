import React from 'react';
import './App.css';
import MyComponent from './components/MyComponent'
import MyDataComponent from './components/MyDataComponent'
function App() {
  return (
    <div className="App">
      <MyComponent name="ibra"> this is my childreasdn </MyComponent>
      <MyDataComponent></MyDataComponent>
    </div>
  );
}

export default App;
