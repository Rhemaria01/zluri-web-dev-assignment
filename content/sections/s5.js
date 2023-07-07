import React,{useState} from "react";
import styled from 'styled-components';
import { Container } from "./style";
import Dropdown from "./Dropdown";
import ImageShowcase from "./ImageShowcase";

const S5 = () => {
    const [selected,setSelected] = useState("Dropdown")

    return (
        <Container >
            <Title>
                <h4>
                    Solution Here
                </h4>
                <p>Put the created component below this.</p>
            </Title>
            <Solution>
            <Dropdown selected={selected} setSelected={setSelected}/>
            <ImageShowcase selected={selected} />
            </Solution>
        </Container>
    )
}

export default S5

const Title = styled.div`
h4{
    font-size: 32px;
font-family: Lexend Medium;
font-style: normal;
font-weight: 500;
line-height: 40px;
letter-spacing: -0.4px;
    span{
        background:#FAE090;
    }
}
p{
    font-size: 18px;
font-family: Lexend Regular;
font-style: normal;
font-weight: 400;
line-height: 28px;
}
`
const QuestionsDiv= styled.div`
ul{
    display:flex;
    flex-direction:column;
}
li{
    font-size:20px;
}
`
const Solution = styled.div`
    display: flex;
    width: 100%;
    justify-content: center;
    gap: 2rem;
    @media(max-width: 992px){
        flex-direction: column;
        align-items: center;
    }

`