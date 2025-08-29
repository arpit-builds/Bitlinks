import Link from "next/link"
const Navbar = () => {
  return (
    <nav className="flex justify-between items-center px-4 h-16 bg-purple-800 text-white">
      <Link href={"/"}><div className="logo font-bold flex items-center">
        <lord-icon
        className="w-[40px] h-[40px]"
          src="https://cdn.lordicon.com/gsjfryhc.json"
          trigger="hover"
          stroke="bold"
          delay="1500"
          colors="primary:#000000,secondary:#000000">
        </lord-icon>
        <span>Bitlinks</span>
      </div></Link>
      <ul className="flex gap-4 items-center">
        <Link href={"/"}><li>Home</li></Link>
        <Link href={"/about"}><li>About</li></Link>
        {/* <li className="hidden md:flex gap-3">
          <Link href={"/shorten"}><button type="button" className="text-white bg-gradient-to-r from-purple-500 to-pink-500 hover:bg-gradient-to-l focus:ring-4 focus:outline-none focus:ring-purple-200 dark:focus:ring-purple-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center">Shorten</button></Link>
          <Link href={`/${process.env.NEXT_PUBLIC_REPO_TEXT}`} target="_blank"><button type="button" className="text-white bg-gradient-to-r from-purple-500 to-pink-500 hover:bg-gradient-to-l focus:ring-4 focus:outline-none focus:ring-purple-200 dark:focus:ring-purple-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center">Github</button></Link>
        </li> */}
      </ul>
    </nav>
  )
}

export default Navbar
