import * as React from 'react';
import Radio from '@mui/material/Radio';
import './styles.css';



export default function RadioButtons() {
  const [selectedValue, setSelectedValue] = React.useState('a');

  const handleChange = (event) => {
    setSelectedValue(event.target.value);
  };
  
  return (
    <div className='radioOptions'>
      <Radio color= 'default'
        checked={selectedValue === 'a'}
        onChange={handleChange}
        value="a"
        name="radio-buttons"
        inputProps={{ 'aria-label': 'A' }}
      />
          <span>Todos</span>

       <Radio color= 'default'
        checked={selectedValue === 'b'}
        onChange={handleChange}
        value="b"
        name="radio-buttons"
        inputProps={{ 'aria-label': 'B' }}
      />
          <span>Prioridade</span>
        
      
        <Radio color= 'default'
        checked={selectedValue === 'c'}
        onChange={handleChange}
        value="c"
        name="radio-buttons"
        inputProps={{ 'aria-label': 'C' }}
      />
          <span>Normal</span>

 
    </div>
  );


}