import React from "react";
import styled from 'styled-components';

const packageInfo = require("../package.json");

export function VersionInfo() {
  return (
    <>
    Current library version: {packageInfo.version}
    </>
    )
  }

export const SizeBlock = ({size}) => {
  return <StyledSizeBlock size={size}/>
}

const StyledSizeBlock = styled.div`
  background: red;
  height: ${(prop) => prop.size};
  width: ${(prop) => prop.size};
  margin: 1rem;
`