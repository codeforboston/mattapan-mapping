import styled from '@emotion/styled';

export const TogglePanelContainer = styled.div`
  font-size: ${ props => props.theme.fonts.fontSize.regular };
  background: #fff;
  box-shadow: 0 0 4px ${ props => props.theme.colors.black };
  margin: 24px;
  padding: ${ props => props.theme.spacing.m } ${ props => props.theme.spacing.l };
  position: absolute;
  top: 0;
  right: 0;
  outline: none;
  cursor: auto;
`;

export const CircleIcon = styled.div<{color: string}>`
  -webkit-border-radius: 8px;
  -moz-border-radius: 8px;
  border-radius: 8px;
  margin: 0 ${ props => props.theme.spacing.xs };
  border: 1px solid ${ props => props.color};
  background-color: ${ props => props.color };
  width: ${ props => props.theme.spacing.s };
  height: ${ props => props.theme.spacing.s };
`;

export const ToggleItemContainer = styled.div`
  display: flex;
  align-items: center;
`;
