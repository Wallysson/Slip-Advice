import styled from 'styled-components'

export const Button = styled.button`
  margin-top: 2rem;
  font-size: 1.2rem;
  background: #a030f7;
  padding: 0.5rem 1rem;
  border: none;
  color: #fff;
  border-radius: 5px;
  cursor: pointer;
  transition: filter 0.2s;

  &:hover {
    filter: brightness(0.8);
  }
`
