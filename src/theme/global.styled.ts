import { createGlobalStyle } from 'styled-components';

export const GlobalStyles = createGlobalStyle`
  * {
    box-sizing: border-box;
  }

  button{
    cursor: pointer;
  }

  /* Scrollbar Styling */
  ::-webkit-scrollbar {
    width: 10px;
    background-color: #F5F5F5;
  }

  ::-webkit-scrollbar-track {
    border-radius: 10px;
    -webkit-border-radius: 10px;
    background-color: #F5F5F5;
    -webkit-box-shadow: inset 0 0 6px rgba(0, 0, 0, 0.3);
  }

  ::-webkit-scrollbar-thumb {
    border-radius: 10px;
    -webkit-border-radius: 10px;
    background-color: rgba(109, 102, 181, 0.3);
    -webkit-box-shadow: inset 0 0 6px rgba(0, 0, 0, .3);
  }
  
  body {
    font-family: 'Inter', sans-serif;
    font-size: 16px;
    font-weight: 400;
  }
  
  .container {
    width: 90%;
  }

  .w100 {
    width: 100%;
  }

  .h100 {
    height: 100%;
  }
  
  .minHeight1080 {
    min-height: 1080px;
  }
  
  .block {
    display: block;
  }
  
  .flex {
    display: flex;
  }
  
  .align-start {
    align-items: start;
  }
  
  .align-center {
    align-items: center;
  }

  .align-end {
    align-items: end;
  }
  
  .justify-center {
    justify-content: center;
  }

  .justify-between {
    justify-content: space-between;
  }

  .justify-end {
    justify-content: flex-end;
  }
  
  .flex-column {
    flex-direction: column;
  }

  .flex-wrap {
    flex-wrap: wrap;
  }

  .flex-grow {
    flex-grow: 1;
  }

  .flex-shrink {
    flex-shrink: 0;
  }
  
  .flex-center {
    display: flex;
    align-items: center;
    justify-content: center;
  }
  
  .flex-between {
    display: flex;
    align-items: center;
    justify-content: space-between;
  }
  
  .relative {
    position: relative;
  }

  .absolute {
    position: absolute;
  }
  
  .object-cover {
    object-fit: cover;
  }
  
  .text-center {
    text-align: center;
  }
  
  .position-center {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
  }
  
  .overflow-hidden {
    overflow: hidden;
  }

  .margin-center {
    margin-right: auto;
    margin-left: auto;
  }

  .cursor-pointer {
    cursor: pointer;
  }
`;
