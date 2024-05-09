declare global {
  interface HeaderNavType {
    name: string,
    href: string
  }

  interface ContactType {
    name: string,
    href: string,
    icon: Components
  }

  interface ProjectType {
    name: string,
    description: string,
    tags: string[],
    thumbnail: string,
    link: string
  }
}

export { };