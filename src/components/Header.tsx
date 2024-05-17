import Link from "next/link";

export default function Header() {
  return (
    <header className="bg-neutral-800">
      <div className="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center">
        <Link
          className="text-white flex title-font font-medium items-center mb-4 md:mb-0"
          href={"./"}
        >
          <span className="ml-3 text-xl">hogehoge</span>
        </Link>
        <nav className="md:ml-auto flex flex-wrap items-center text-base justify-center">
          <Link
            className="mr-5 text-white"
            href={"./fizzbuzz"}
          >
            FizzBuzz
          </Link>
          <Link
            className="mr-5 text-white"
            href={"./dog-api"}
          >
            犬ギャラリー
          </Link>
          <Link
            className="mr-5 text-white"
            href={"./tic-tac-toe"}
          >
            三目並べ
          </Link>
        </nav>
      </div>
    </header>
  )
}
