import Link from "next/link"
import { Button } from "@/components/ui/button"

const notFound = () => {
  return (
    <div className="bg-black w-screen h-screen flex gap-10 justify-center items-center flex-col">
        <h1 className="text-white text-6xl">404 | Page Not Found</h1>
        <Link href='/'><Button variant='destructive'>Go Back Home</Button></Link>
    </div>
  )
}
export default notFound