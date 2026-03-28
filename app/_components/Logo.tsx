import Image from "next/image";




const Logo: React.FC = () => {
  
  return (
    <div>
      <Image loading="eager" width={250} height={130} src="/logo.png"  alt="App Logo" />
    </div>
  )
  
  
}


export default Logo;