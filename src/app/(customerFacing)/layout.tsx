import { Nav, NavLink } from '@/components/Nav'

// Forces Next.js to exlude this page and any children from caching
// Use only when needed, there are ways to be more specific with what is excluded
// Can cause performance issues
export const dynamic = 'force-dynamic'

export default function Layout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <>
      <Nav>
        <NavLink href='/'>Home</NavLink>
        <NavLink href='/products'>Products</NavLink>
        <NavLink href='/orders'>My Orders</NavLink>
      </Nav>
      <div className='container my-6'>{children}</div>
    </>
  )
}
