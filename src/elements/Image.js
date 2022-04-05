import React from "react";
import styled from "styled-components";

const Image = (props) => {

  const {shape, src, size} = props;

  const styles = {
    shape: shape,
    src: src,
    size: size,
  }

  if (shape === "circle") {
    return (
      <ImgCircle {...styles}></ImgCircle>
    )
  }
  if (shape === "rectangle") {
    return (
      <AspectOutter>
        <AspectInner {...styles}></AspectInner>
      </AspectOutter>
    ) 
  }

  return (
    <React.Fragment>

    </React.Fragment>
  )
}

Image.defaultProps = {
  shape: "circle",
  src: "https://imgnews.pstatic.net/image/076/2022/04/05/2022040501000313400018701_20220405075004285.jpg?type=w647",
  size: 40,
}

const AspectOutter = styled.div`
    width: 100%;
    min-width: 250px;
`;

const AspectInner = styled.div`
    position: relative;
    padding-top: 75%;
    overflow: hidden;
    background-image: url("${(props) => props.src}");
    background-size: cover;
`;

const ImgCircle = styled.div`
  --size: ${(props) => props.size}px;
  width: var(--size);
  height: var(--size);
  border-radius: var(--size);

  background-image: url("${(props) => props.src}");
  background-size: cover;
  margin: 4px;
  margin-right: 15px;
`;

export default Image;