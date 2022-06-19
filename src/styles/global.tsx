import { createGlobalStyle } from 'styled-components';

const px2vw = (size: number, width: number = 1440) => `${(size / width) * 100}vw`;

export default createGlobalStyle`
    * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
    }

    :root {
      font-size: ${px2vw(24)};

      @media (min-width: 768px) {
        font-size: ${px2vw(18)};
      }

      @media (min-width: 1024px) {
        font-size: ${px2vw(16)};
      }
    }

    body {
        background: #f5f5f5;
        font-size: 14px;
        color: #333;
        font-family: sans-serif;
    }
`;