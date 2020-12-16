import Link from 'next/link'

export default function HeroHeader() {
  return (
    <section className="bg-cover bg-no-repeat" style={{backgroundImage: "url('/images/MakaiAgency-HeroHeader.jpg')"}}>
      <div className="container flex items-center justify-start h-screen">
        <div className="w-2/3 h-1/2 flex flex-col justify-between text-white">
          <p className="uppercase tracking-wider">Welcome to Makai</p>
          <div>
            <h1 className="text-4xl lg:text-5xl xl:text-7xl font-extralight tracking-wide font-serif leading-relaxed mb-3 lg:mb-6">Design for impact</h1>
            <p className="text-lg lg:text-xl">With your customer at the center of your story, your pipeline of loyal fans will follow.</p>
          </div>
          <button className="main-animate w-1/2 border-pink-500 border-2 py-3 px-6">
            <Link href="/">
              <a className="uppercase tracking-wider font-serif text-pink-500">Get Connected</a>
            </Link>
          </button>
        </div>
      </div>
    </section>
  )
}