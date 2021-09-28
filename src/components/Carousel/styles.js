import styled, { keyframes } from 'styled-components'
import Slider from 'react-slick'

export const Container = styled.div`
    margin-bottom: 20px;
    border-bottom: 1px solid #CCC;
    padding-bottom: 20px;
    overflow: hidden;
`;

export const Title = styled.h2`
    font-size: 14px;
    font-weight: 700;
    margin-bottom: 10px;
`;

export const Player = styled(Slider)`
    margin-right: -10px;
`;

export const Slide = styled.div`
    width: 90px !important;
    height: 90px;
    margin-right: 10px;
    border-radius: 10px;
    background-color: #CCC;
    background-image: url(${(props) => props.photo});
    background-size: cover;
`;

export const Label = styled.div`
    width: 100%;
    height: 100%;
    background-image: linear-gradient(to bottom, rgba(255,0,0,0), rgba(0,0,0,0.8));
    font-weight: 700;
    font-size: 12px;
    cursor: pointer;
    border-radius: 10px;
    display: flex;
    align-items: flex-end;
    padding: 10px;
    color: #EEE;
`;

const loadingAnim = keyframes`
  0% {
    opacity: 0.1;
  }
  100% {
    opacity: 1;
  }
`;

export const Skeleton = styled.div`
    width: 90px !important;
    height: 90px;
    margin-right: 10px;
    border-radius: 10px;
    background: #e2e2e2;
    animation: ${loadingAnim} 500ms infinite alternate;
    float: left;
`;