import styled, { keyframes } from 'styled-components'

export const Container = styled.div`
    width: 100%;
    flex: 1;
    padding-bottom: 20px;
    overflow-y: auto;
    -ms-overflow-style: none;  /* IE and Edge */
    scrollbar-width: none;  /* Firefox */

    &::-webkit-scrollbar {
        display: none;
    }
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
    width: 100%;
    margin-top: 10px;
    padding: 10px;
    background: #e2e2e2;
    border-radius: 10px;
    position: relative;
    min-height: 100px;
    animation: ${loadingAnim} 500ms infinite alternate;

    &:first-child {
        margin-top: 0;
    }
`;