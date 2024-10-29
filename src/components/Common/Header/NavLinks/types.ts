type NavAttributes = {
  id: number
  src: string
  text: string
}

export type NavLinksProps = {
  links: NavAttributes[]
  mobile?: boolean
  sidebarClose?: React.Dispatch<React.SetStateAction<boolean>>
}
