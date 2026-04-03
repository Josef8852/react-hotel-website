import Image from "next/image";
import Link from "next/link";
import logo from "@/public/Logo.png"



const Logo: React.FC = () => {
  
  return (
    <Link href="/" className="flex items-center z-10" >
      <div className="flex items-center gap-6">
      <Image loading="lazy" width={60} height={60} src={logo} alt="App Logo" />
        <span className="font-bold text-xl text-yellow-600 " >React Hotel</span>
      </div>
    </Link>
  )
  
  
}


export default Logo;