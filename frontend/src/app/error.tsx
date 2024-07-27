'use client' // Error components must be Client Components
 
import { useEffect } from 'react'
 
export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string }
  reset: () => void
}) {
  useEffect(() => {
    // Log the error to an error reporting service
    console.error(error)
  }, [error])
 
  return (
    <div className='w-screen h-screen bg-black text-white flex flex-col justify-center items-center gap-4'>
        <h2 className='text-6xl font-bold'>Oops! Something went wrong.</h2>
        <p className='text-xl'>This is an error page. Please try again later.</p>
    </div>
  )
}