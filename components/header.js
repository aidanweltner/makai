import Link from "next/link";

export default function Header() {
  return (
    <header>
      <div className="container flex justify-end">
        <nav className="p-4">
          <ul className="flex uppercase tracking-wider font-serif space-x-6">
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