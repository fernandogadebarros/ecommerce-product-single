export interface PrefixProps extends React.ComponentProps<'div'> {
  children: React.ReactNode
}

export interface ControlProps extends React.ComponentProps<'button'> {
  asChild?: boolean
}
