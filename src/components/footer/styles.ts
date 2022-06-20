import styled from "styled-components";
import footer from '../../assets/footer.svg';

type ImageContainerProps = {
    src?: string
    imageSize?: string
}

export const ImageContainer = styled.div<ImageContainerProps>`
    display: block;
    
    margin: 0;
    margin-left: auto;
    margin-right: auto;
    width: 300px;
    height: 100px;
    
    background-image: url(${footer});
    background-repeat: no-repeat;
    background-size: contain;
`;