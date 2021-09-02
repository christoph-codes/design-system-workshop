import React from "react";
import styled from 'styled-components';
import {colors, typography} from './tokens';

const packageInfo = require("../package.json");

export function VersionInfo() {
  return (
    <>
    Current library version: {packageInfo.version}
    </>
    )
  }

export const SizeBlock = ({size}) => {
  return (
  <StyledSizeBlockContainer>
    <StyledSizeBlock size={size}/>
    <span>{size}</span>
  </StyledSizeBlockContainer>
  )
}

const StyledSizeBlockContainer = styled.div`
  display: flex;
  align-items: center;
  span {
	  font-family: ${typography.headline1FontFamily};
	  font-weight: ${typography.paragraph1FontWeight}
  }
`
const StyledSizeBlock = styled.div`
  background: ${colors.colorsPrimaryOrange10};
  height: ${({ size }) => size};
  width: ${({ size }) => size};
  margin: 1rem;
`

export const SpaceBlock = ({space}) => {
	return (
	<StyledSpaceBlockContainer>
	  <StyledSpaceBlock size={space}/>
	  <span>{space}</span>
	</StyledSpaceBlockContainer>
	)
  }
  
  const StyledSpaceBlockContainer = styled.div`
	display: flex;
	align-items: center;
	padding: ${({ space }) => space};
	border: dashed 1px ${colors.colorsPrimaryOrange10};
	span {
		font-family: ${typography.headline1FontFamily};
		font-weight: ${typography.paragraph1FontWeight}
	}
  `
  const StyledSpaceBlock = styled.div`
	background: ${colors.colorsPrimaryOrange10};
	height: 2rem;
	width: 2rem;
  `