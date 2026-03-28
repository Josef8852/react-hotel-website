import Link from "next/link";



const Navigation: React.FC = () => {
  
  return (
    <ul>
      <li><Link href="/">Home</Link></li>
      <li><Link href="/account">Account</Link></li>
      <li><Link href="/cabins">Cabins</Link></li>
      <li><Link href="/about">About</Link></li>
    </ul>
  )
  
  
}


export default Navigation;