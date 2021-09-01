
import React from "react";
import styled from "styled-components";

/* Image
 *
 * just an image
 */
const Image = (props) => {
  return <StyledImage {...props}/>;
};

export const StyledImage = styled.img`
  max-width: 100%;
  max-height: 100%;
  margin-bottom: ${({ size }) =>
    size === "big" ? "24px" : size === "small" ? "0px" : "16px"};
  display: block;
  border-radius: 32px;
`;

export default Image;
