import Image from "next/image";
import Link from "next/link";




const Logo: React.FC = () => {
  
  return (
    <Link href="/" className="flex items-center" >
      <Image loading="eager" width={250} height={130} src="/logo.png"  alt="App Logo" />
    </Link>
  )
  
  
}


export default Logo;