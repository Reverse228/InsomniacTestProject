export type StyledProps  = {
  $padding?: string;
  $color?: string
}

export type Props = StyledProps & {
  text: string;
  href: string;
}