import styled from "styled-components";

export const Services2Container = styled.div`
min-height: 500px;
display: flex;
flex-direction: column;
justify-content: center;
align-items: center;
background: #010606;
padding: 20px 0;

@media screen and (max-width: 768px) {
    min-height: 1100px;
}

@media screen and (max-width: 480px) {
    min-height: 1300px;
}

`

export const Services2Wrapper = styled.div`
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

export const Services2Card = styled.div`
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
        transform: scale(1.22);
    }

`

export const Services2Icon = styled.img`
    height: 200px;
    width: 300px;
    margin-bottom: 40px;
    align: center;
    margin: 0 auto;
    
`

export const Services2H1 = styled.h1`
    font-size: 2.5rem;
    color: #0DCAF0;
    margin-bottom: 64px;

    @media screen and (max-width: 480px) {
        font-size: 2rem;
    }

`

export const Services2H2 = styled.h2`
font-size: 1.2rem;
color: #0189A1;
margin-bottom: 10px;
font-weight: 900;
text-align: center;

`

export const Services2P = styled.p`
    font-size: 1rem;
    text-align: center;

`
