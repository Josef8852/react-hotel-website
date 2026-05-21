import Image from "next/image";
import Link from "next/link";
import bg from "@/public/bg.png"





const Page:React.FC = ()  => {
  return (
    <main className="mt-12 sm:mt-24">
      <Image
        src={bg}
        placeholder="blur"
        priority
        className="object-cover object-top"
        alt="Mountains and forests with two cabins"
        fill
      />

      <div className="relative z-10 text-center px-4">
        <h1 className="text-4xl sm:text-6xl md:text-8xl text-primary-50 mb-6 sm:mb-10 tracking-tight font-normal">
          Welcome to paradise.
        </h1>
        <Link
          href="/cabins"
          className="bg-accent-500 px-5 py-4 sm:px-8 sm:py-6 text-primary-800 text-base sm:text-lg font-semibold hover:bg-accent-600 transition-all"
        >
          Explore luxury cabins
        </Link>
      </div>
    </main>
  );
}


export default Page;