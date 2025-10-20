const Header = () => {

  const scrollTo = (id) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  }

  return (
    <div className="navbar bg-base-100 shadow-lg fixed z-50">
      <div className="flex-1">
        <a className="btn btn-ghost text-2xl" onClick={() => scrollTo("about-me")}>auhmaugmaufm</a>
      </div >
      <div className="flex-none hidden sm:flex">
        <ul className="menu menu-horizontal px-3">
          <li className="text-lg"><a onClick={() => scrollTo("about-me")}>About</a> </li>
          <li className="text-lg"><a onClick={() => scrollTo("skills")}>Skills</a></li>
          <li className="text-lg"><a onClick={() => scrollTo("projects")}>Projects</a></li>
          <li className="text-lg"><a onClick={() => scrollTo("contact")}>Contact</a></li>
        </ul>
      </div>
      <div className="flex-none sm:hidden">
        <div className="dropdown dropdown-end">
          <button tabIndex={0} className="btn btn-ghost">
            ☰
          </button>
          <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-60">
            <li className="text-lg"><a onClick={() => scrollTo("about-me")}>About</a> </li>
            <li className="text-lg"><a onClick={() => scrollTo("skills")}>Skills</a></li>
            <li className="text-lg"><a onClick={() => scrollTo("projects")}>Projects</a></li>
            <li className="text-lg"><a onClick={() => scrollTo("contact")}>Contact</a></li>
          </ul>
        </div>
      </div>
    </div>
  )
}
export default Header