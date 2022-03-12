


const SelectionWidgets = ({widget,index , selectedIndex , getSelectedIndex}) => {  
 
    
  const handleChagneBgColor = (i) =>{
      getSelectedIndex(i)
  }
  return (
   
      <div  className='widget'  style={{ background : selectedIndex === index &&  "#000" , color : selectedIndex === index &&  "#fff" } }  onClick={()=>handleChagneBgColor(index)}>
                {widget}
            </div>
   
  )
}

export default SelectionWidgets