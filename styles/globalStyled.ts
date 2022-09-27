export const colors = {
  pink: "#E76ECE",
  blue: "#1996C3",
  black: "black",
  gray: "#EFF9FD",
  green: "#8DC63F",
  white: "white",
  lightGray: "#F0F0F0",
  red: "#D84E30"
}

export const flex = (jc: string, ai: string, fd: string) => (`
  display: flex;
  justify-content: ${jc};
  align-items: ${ai};
  flex-direction: ${fd}; 
`)

export const setText = (color: string, fs: string, fw: number) => (`
  color: ${color};
  font-size: ${fs};
  font-weight: ${fw}
`)