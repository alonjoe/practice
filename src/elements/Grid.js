import React from "react";
import styled from "styled-components";

const Grid = (props) => {

  const {is_flex, width, margin, padding, bg, center, children} = props;

  const styles = {
    is_flex: is_flex,
    width: width,
    margin: margin,
    padding: padding,
    bg: bg,
    center: center,
  }

  return (
    <React.Fragment>
      <GridBox {...styles}>{children}</GridBox>
    </React.Fragment>
  )
}

Grid.defaultProps = {
  is_flex: false,
  width: "100%",
  margin: false,
  padding: false,
  bg: false,
  center: false,
  children: null,
}

const GridBox = styled.div`
  width: ${(props) => props.width};
  height: 100%;
  box-sizing: border-box;
  ${(props) => props.margin? `margin: ${props.margin};` : ""}
  ${(props) => props.padding? `padding: ${props.padding};` : ""}
  ${(props) => props.bg? `background: ${props.bg};` : ""}
  ${(props) => props.center? `text-align: center;` : ""}
  ${(props) => props.is_flex? `display: flex; align-items: center; justify-content: space-between;` : ""}
`;

export default Grid;