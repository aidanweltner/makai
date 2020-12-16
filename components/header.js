import Link from "next/link";

export default function Header() {
  return (
    <header className="absolute top-0 inset-x-0">
      <div className="container flex justify-end">
        <nav className="py-4 lg:py-6 xl:py-8">
          <ul className="flex uppercase tracking-wider font-serif text-white space-x-6">
            <li>
              <Link href="/">
                <a>About</a>
              </Link>
            </li>
            <li>
            <Link href="/">
                <a>Investment</a>
              </Link>
            </li>
            <li>
            <Link href="/">
                <a>Clients</a>
              </Link>
            </li>
            <li>
            <Link href="/">
                <a>Contact</a>
              </Link>
            </li>
          </ul>
        </nav>
      </div>
    </header>
)}