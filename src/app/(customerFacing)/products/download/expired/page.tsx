import { Button } from '@/components/ui/button'
import Link from 'next/link'

export default function Expired() {
  return (
    <>
      <h1 className='text-4xl mb-4'>Download link expired</h1>
      <Button className='lg' asChild>
        <Link href='/orders'>Get New Link</Link>
      </Button>
    </>
  )
}
