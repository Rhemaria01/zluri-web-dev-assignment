import React from 'react'
import styled  from 'styled-components'
import Mountain from "../images/mountainscenery.png"
import Forest from "../images/forest.png"
import Ocean from "../images/ocean.png"
import Dessert from "../images/dessert.png"
const ImageShowcase = ({selected}) => {

    const getImage = () => {
        switch(selected){
            case "Mountain": 
            return Mountain
            case "Forest": 
            return Forest
            case "Ocean": 
            return Ocean
            case "Dessert": 
            return Dessert
    }
    }

  return (
    <ImgWrapper>
        <div>
        {
        selected !== "Dropdown" ? <img  src={getImage()} alt={selected}/> : 
        <h3>Select an option from the Dropdown to view an image</h3>
        }
        </div>
    </ImgWrapper>
  )
}

export default ImageShowcase

const ImgWrapper = styled.div`
box-shadow: 0 4px 12px  rgba(0, 0, 0, 0.16);
border-radius: 8px;
width: 500px;
aspect-ratio: 25/17;
padding: 1%;
div{
display: flex;
justify-content: center;
align-items: center;
width: 480px;
aspect-ratio: 3/2;
background-color: #DDDDDD;
border-radius: 8px;
}
img{
    width: 100%
}
h3{
 font-family: Lexend Medium;
 text-align: center;
 width: 90%;
}
@media(max-width: 768px){
        width: 400px;
        div{
            width: 384px;
        }
    }
`