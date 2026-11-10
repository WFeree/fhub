const Navbar = () => {
  return (
    <header className="bg-white sticky top-0 z-50 w-full border-b backdrop-blur-2xl">
      <nav className="flex mx-auto h-16 max-w-6xl items-center justify-center px-6">
        <div className="flex items-center gap-4 mr-auto">
          <img src="./logotrans.png" className="h-16"/>
          <span className="font-bold">Ferenc Wágner - CV</span>
        </div>
        <div className="flex justify-center gap-12">
          <a href="#">About</a>
          <a href="#">Work / References</a>
          <a href="#">Achivements</a>
        </div>
      </nav>
    </header>
  )
}

export default Navbar