import styled from "styled-components";
import { GrClose } from 'react-icons/gr';

export const Backdrop = styled.div`
    position: fixed;
    top: 0;
    left: 0;
    width: 100vw;
    height: 100vh;
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: rgba(0, 0, 0, 0.8);
    z-index: 1200;
`;

export const ModalWrapper = styled.div`
position: relative;
max-width: calc(100vw - 100px);
max-height: calc(100vh - 100px);

display: flex;
flex-direction: column;
justify-content: center;
padding: 60px 20px;
width: 280px;
height: 302px;
flex-shrink: 0;
border-radius: 20px;
background: #FFF;
`;


export const ButtonClose = styled.button`
position: absolute;
top: 12px;
right: 12px;
border: none;
background-color: #fff;
flex-shrink: 0;
`;

export const IconClose = styled(GrClose)`
width: 24px;
height: 24px;
fill: #54ADFF;
`;