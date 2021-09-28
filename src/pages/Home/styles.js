import styled from "styled-components";

export const Container = styled.main`
  display: flex;
  flex-direction: row;
  height: 100vh;
  width: 100vw;
  background: #fcfcfc;
  padding: 20px;
  overflow: hidden;
`;

export const Sidebar = styled.aside`
    width: 320px;
    height: calc(100vh - 20px);
    overflow: hidden;
    padding-right: 20px;
    display: flex;
    flex-direction: column;
`;

export const Title = styled.h1`
    font-size: 22px;
    font-weight: 700;
    text-align: center;
`;
export const SearchBar = styled.input`
    width: 100%;
    padding: 10px;
    border: 1px solid #CCC;
    border-radius: 10px;
    margin: 20px 0;
    font-family: 'IBM Plex Sans', sans-serif;
    font-size: 16px;
`;

export const ContentWindow = styled.section`
    border-radius: 15px;
    width: calc(100% - 320px);
    height: 100%;
    overflow: hidden;
`;

