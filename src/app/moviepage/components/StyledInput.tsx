"use client";

import styled from "styled-components";

interface StyledInputProps {
	$width?: string;
	$height?: string;
	$padding?: string;
	$margin?: string;
	$bordercolor?: string;
	$borderradius?: string;
	$highlightcolor?: string;
	$placeholder?: string;
	value?: string;
	onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

const StyledMovieInput = styled.input<StyledInputProps>`
  width: ${(props) => props.$width || "100%"};
  height: ${(props) => props.$height || "5rem"};
  padding: ${(props) => props.$padding || "0.5rem"};
  margin: ${(props) => props.$margin || "0"};
  border: ${(props) => props.$bordercolor || "1px solid #D9D9D9"};
  border-radius: ${(props) => props.$borderradius || "0.5rem"};
  outline: none;

  ::placeholder {
    color: #b0b0b0;
  }

  &:focus {
    border-color: ${(props) => props.$highlightcolor || "#8BB9FF"};
  }
`;

const StyledInput: React.FC<StyledInputProps> = ({
	$placeholder = "여기에 입력...",
	value,
	onChange,
	...props
}) => {
	return <StyledMovieInput placeholder={$placeholder} value={value} onChange={onChange} {...props} />;
};

export default StyledInput;