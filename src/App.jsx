import React from 'react';
import Card from './component/Card/Card';
import Button from './component/Header/Button/Button';
import Header from './component/Header/Header';

const App = () => {
  
  return (
    <div>
   <Header />
   <Button>Sort By Date</Button>
    <Card />
   
   
    </div>
  );
};

export default App;