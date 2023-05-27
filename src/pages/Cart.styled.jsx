import styled from 'styled-components';
export const Item = styled.li`
  padding: ${p => p.theme.space[4]}px;
  text-decoration: none;
  color: ${p => p.theme.colors.text};
  border-radius: 8px;
  display: flex;
  flex-direction: column;
  min-width: 150px;
  gap: 15px;
  background-color: ${p => p.theme.colors.muted};
  transition: 250ms cubic-bezier(0.4, 0, 0.2, 1);
  &:hover {
    transform: scale(1.06);
  }
`;
export const BtnDel = styled.button`
  background-color: ${p => p.theme.colors.accent};
  border: none;
  border-radius: 4px;
  padding: ${p => p.theme.space[2]}px;
  color: ${p => p.theme.colors.white};
  font-weight: ${p => p.theme.fontWeights.bold};
  cursor: pointer;
  transition: 250ms cubic-bezier(0.4, 0, 0.2, 1);
  :hover {
    background-color: ${p => p.theme.colors.background};
    color: ${p => p.theme.colors.accent};
  }
`;
export const Btn = styled.button`
  background-color: ${p => p.theme.colors.primary};
  border: none;
  width: 186px;
  border-radius: 4px;
  padding: ${p => p.theme.space[2]}px;
  color: ${p => p.theme.colors.white};
  font-weight: ${p => p.theme.fontWeights.bold};
  cursor: pointer;
  transition: 250ms cubic-bezier(0.4, 0, 0.2, 1);
  :hover {
    background-color: ${p => p.theme.colors.background};
    border: 1px solid;
    border-color: ${p => p.theme.colors.primary};
    color: ${p => p.theme.colors.primary};
  }
`;
