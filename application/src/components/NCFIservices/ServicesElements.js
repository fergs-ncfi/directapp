import styled from "styled-components";

export const ServicesContainer = styled.div`
min-height: 600px;
display: flex;
flex-direction: column;
justify-content: center;
align-items: center;
background: #010606;


@media screen and (max-width: 768px) {
    min-height: 1100px;
}

@media screen and (max-width: 480px) {
    min-height: 1300px;
}

`

export const ServicesWrapper = styled.div`
    max-width: 2000px;
    margin: 0 auto;
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
    align-items: center;
    grid-gap: 16px;
    padding: 20px 50px;
    

    @media screen and (max-width: 1000px) {
        grid-template-columns: 1fr 1fr;
        padding: 20px 50px;
    }

    @media screen and (max-width: 768px) {
        grid-template-columns: 1fr;
        //padding: 0 20px;
        padding: 20px 50px;
    }

`

export const ServicesCard = styled.div`
    background: white;
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: center;
    border-radius: 10px;
    max-height: 400px;
    padding: 30px;
    box-shadow: 0 1px 3px rgba(0,0,0,0.2);
    transition: all 0.2s ease-in-out;

    &:hover {
        transform: scale(1.02);
        background: #57DFF7;
        color: #FFFFFF;
        font-size: 3.5rem; 
    }

`

export const ServicesIcon = styled.img`
    height: 200px;
    width: 300px;
    margin-bottom: 40px;
    
`

export const ServicesH1 = styled.h1`
    font-size: 2.5rem;
    color: #0DCAF0;
    font-weight: bold;
    margin-bottom: 14px;

    @media screen and (max-width: 480px) {
        font-size: 2rem;
    }
  

`

export const ServicesH2 = styled.h2`
font-size: 1.1rem;
color: #FFF;
margin-bottom: 10px;
font-weight: 900;
text-align: center;

`

export const ServicesP = styled.p`
    font-size: 1rem;
    text-align: center;

`
