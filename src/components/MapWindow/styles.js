import styled from 'styled-components';

export const Name = styled.h3`
    font-weight: 700;
    font-size: 16px;
    font-family: 'IBM Plex Sans', sans-serif;
`;

const Label = styled.span`
    width: 188px;
    display: block;
    line-height: 115%;
`;
export const Info = styled(Label)`
    font-size: 12px;
    margin-top: 5px;
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