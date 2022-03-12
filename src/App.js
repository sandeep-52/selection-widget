import {useState} from "react"
import './App.css';
import SelectionWidgets from './components/SelectionWidgets';

function App() {
  let widgetArray = ["Red","Green","Yellow","Orange","Pink"]
  const [selectedIndex , setSelectedIndex] = useState(null)

  const getSelectedIndex = (i) =>{
    setSelectedIndex(i)
  }
  
  return (
    <div className="App">
    <div  className='selection-widget'>
    {widgetArray.map((item,index) =>{
      return <SelectionWidgets  widget={item} index={index} selectedIndex={selectedIndex} getSelectedIndex={getSelectedIndex}/>
    })}
     
    </div>
    </div>
    
  );
}

export default App;
