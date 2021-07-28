import styled from 'styled-components';

interface SortProps {
  center?: boolean;
}

export const Ul = styled.ul<SortProps>`
  margin: 0;
  padding: 0;
  list-style: none;
  display: flex;
  flex-flow: row wrap;
  justify-content: ${({ center }) => (center ? 'center' : 'flex-start')};
`;

export const Li = styled.li`
  font-weight: 500;
  &::after {
    content: '|';
    font-weight: 600;
    margin: 0 5px;
  }
  &:last-child {
    &::after {
      content: none;
    }
  }
`;
