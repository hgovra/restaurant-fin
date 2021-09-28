import styled from 'styled-components'
import ReactStars from "react-rating-stars-component";

export const Container = styled.div`
    width: 100%;
    margin-top: 10px;
    padding: 10px;
    background: #f1f1f1;
    border-radius: 10px;
    position: relative;
    min-height: 100px;
    cursor: pointer;

    &:first-child {
        margin-top: 0;
    }
`;

const Label = styled.span`
    width: 188px;
    display: block;
    line-height: 115%;
`;
export const Name = styled(Label)`
    font-weight: 700;
    font-size: 18px;
    margin-bottom: 2px;
`;
export const Info = styled(Label)`
    font-size: 12px;
    margin-top: 5px;
`;

export const Rating = styled(ReactStars)`
    
`;

export const Image = styled.div`
    background-color: #CCC;
    background-image: url(${(props) => props.photo});
    background-size: cover;
    border-radius: 7px;
    width: 80px;
    height: 80px;
    position: absolute;
    right: 10px;
    top: 10px;
`;