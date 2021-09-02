import React, { useState } from "react";
import styled from "styled-components";
import Title from "../Title";
import Button from "../Button";
import { string } from "prop-types";

/* Input
 *
 * Multiline input area, disabled by default, with button to enter editing mode
 */
const Input = ({ label, text }) => {
  const [isDisabled, setDisabled] = useState(true);
  return (
    <>
      <StyledTitleContainer>
        <Title size="small">
          <label htmlFor="addressInput">{label}</label>
        </Title>
        <Button isBorderless onClick={() => setDisabled(false)}>
          Change
        </Button>
      </StyledTitleContainer>
      <StyledTextarea
        rows="3"
        disabled={isDisabled}
        id="addressInput"
        name="textValue"
        onBlur={() => setDisabled(true)}
        defaultValue={text}
      />
    </>
  );
};

Input.propTypes = {
  label: string,
  text: string,
};

const StyledTextarea = styled.textarea`
  width: 100%;
  background: transparent;
  border: none;
  opacity: ${({ disabled }) => (disabled ? 0.6 : 1)};
  font-family: "DM Sans";
  font-size: 14px;
  font-weight: 400;
  line-height: 24px;
  letter-spacing: -0.3px;
  color: rgba(12, 17, 24, 1);
`;

const StyledTitleContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: baseline;
`;

export default Input;
