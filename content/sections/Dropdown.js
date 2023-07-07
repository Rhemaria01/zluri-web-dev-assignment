import React, { useState, useRef, useEffect } from 'react'
import styled  from 'styled-components'
import Caret from "../images/caret.png"
import CaretClose from "../images/caretClose.png"
const Dropdown = ({selected,setSelected}) => {
    const options = ["Mountain","Forest","Ocean","Dessert"]
    const [open,setOpen] = useState(false)
    const dropdownMenuRef = useRef(null)

    const handleSelect = (option) => {
        setSelected(option)
        setOpen(!open)
        
    }

    const handleDropDown = (e) => {
        if(open) eventFunction(e)
        else setOpen(!open);
    }

    const eventFunction =  (e) => {
        if(e.target == dropdownMenuRef.current || e.target == document.getElementById("dropdown") ) return;
        else{   
                    const options = [...document.getElementsByClassName("option")]
                    options.map((option) => option.classList.add(`blue-bg`))
                    setTimeout(() => {
                        options.map((option) => option.classList.remove("blue-bg"))
                    }, 150);
        }
    }

    useEffect(() => {
      document.addEventListener('click', (e) => {
        eventFunction(e);
      })
    
      return () => {
        document.removeEventListener('click',(e) => {
            eventFunction(e);
          })
      }
    }, [open])
    
  return (
    <Div>

    <div className={`dropdown ${open && "opened"}`} onClick={handleDropDown} id="dropdown">
        {open ? "Dropdown" : selected}
         <img src={open ? Caret : CaretClose } className='caret' alt="caret" />
    </div>
    <div ref={dropdownMenuRef} className={`dropdown-menu ${!open && "hide"}`} >

    {options.map((option,index) => {
            return  <div key={index} onClick={()=>handleSelect(option)} onMouseOverCapture={()=>setSelected(option)} className={`option ${selected === option ? "selected"  : ""}`}>{option}</div>
        })}
    </div>

    </Div>
  )
}

export default Dropdown

const Div = styled.div`
.dropdown{
    width: 236px;
    height: 40px;
    border: solid 1px #DDDDDD;
    border-radius: 8px;
    display :flex;
    align-items: center;
    justify-content: space-between;
    padding-left: 5%;
    padding-right: 5%;
    font-family: Lexend Medium;
    cursor: pointer;
    color: #484848;
}
.dropdown-menu{
    width:236px;
    border-radius: 8px;
    box-shadow: 0 4px 12px  rgba(0, 0, 0, 0.16);
    font-family: Lexend Medium;
    font-weight: 700;
    padding: 2% 5%;
    margin-bottom: 1rem;
}
.caret{
    pointer-events: none;
    user-select: none;
}
.hide{
    visibility: hidden;
}
.dropdown:hover{
    border: solid 1px #5287E8;
}
.opened{
    color: #DDDDDD;
    border: solid 1px #5287E8;
}
.option{
    cursor: pointer;
    border-radius: 8px;
    height: 40px;
    display: flex;
    align-items: center;
    padding-left: 5%;
    margin-bottom: 1%;
}
.option:hover, .selected{
    background-color: #E1E8F8;
}
.blue-bg{
    background-color: #c6eefe;
    border-radius: 0px;
    border: solid 3px #8edefe;
}
`
