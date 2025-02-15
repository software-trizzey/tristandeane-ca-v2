interface NavItem {
  title: string
  href: string
}

export const NAVIGATION: NavItem[] = [
  {
    title: 'Home',
    href: '/'
  },
  {
    title: 'About',
    href: '/about'
  },
  {
    title: 'Blog',
    href: '/posts'
  },
  {
    title: 'Projects',
    href: '/projects'
  }
]
