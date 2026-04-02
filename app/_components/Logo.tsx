import Image from "next/image";
import Link from "next/link";




const Logo: React.FC = () => {
  
  return (
    <Link href="/" className="flex items-center" >
      <div className="flex items-center gap-6">
      <Image loading="eager" width={60} height={60} src="/Logo.png" alt="App Logo" />
        <span className="font-bold text-xl text-yellow-600 " >React Hotel</span>
      </div>
    </Link>
  )
  
  
}


export default Logo;