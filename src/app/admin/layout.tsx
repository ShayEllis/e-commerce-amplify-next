import { Nav, NavLink } from '@/components/Nav'

// Forces Next.js to exlude this page and any children from caching
// Use only when needed, there are ways to be more specific with what is excluded
// Can cause performance issues
export const dynamic = 'force-dynamic'

export default function AdminLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <>
      <Nav>
        <NavLink href='/admin'>Dashboard</NavLink>
        <NavLink href='/admin/products'>Products</NavLink>
        <NavLink href='/admin/users'>Customers</NavLink>
        <NavLink href='/admin/orders'>Sales</NavLink>
      </Nav>
      <div className='container my-6'>{children}</div>
    </>
  )
}
