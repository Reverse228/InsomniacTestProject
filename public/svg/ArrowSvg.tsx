import React, { FC } from "react";
import { SvgProps } from "./SvgProps";

export const ArrowSvg: FC<SvgProps> = ({ $color = "white" }) => (
  <svg width="31" height="14" viewBox="0 0 31 14" fill="none">
    <path
      d="M1 6.9458H30.5"
      stroke={$color}
      strokeWidth="2"
      strokeLinecap="round"
    />
    <path
      d="M24 1.4458L31 6.9458L24 12.4458"
      stroke={$color}
      strokeWidth="2"
      strokeLinecap="round"
    />
  </svg>
);
