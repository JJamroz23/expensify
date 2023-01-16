import styled from "styled-components";
import { InputFilterStyles } from "../../Styles";

export const InputText = styled.input`
  ${InputFilterStyles}
`;
export const Select = styled.select`
  ${InputFilterStyles}
`;

export const FormFilter = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const RangeContainer = styled.div`
  /* width: 25%; */
`;
