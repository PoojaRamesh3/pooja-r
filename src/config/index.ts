export enum tooltipPostitionEnum {
  Up,
  Down,
}

export interface ITooltip {
  content: string;
  position: tooltipPostitionEnum;
  children?: JSX.Element;
  disabled: boolean;
}
