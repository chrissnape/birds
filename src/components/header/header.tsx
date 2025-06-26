const Header = () => {
  return (
    <header className="flex justify-between items-center px-32 h-16 bg-emerald-900 text-white">
      <h1 className="text-2xl font-bold">Birds</h1>
      <nav>
        <ul className="flex gap-4">
          <li><a href="#home" className="hover:underline">Home</a></li>
          <li><a href="#about" className="hover:underline">About</a></li>
          <li><a href="#birds" className="hover:underline">Birds</a></li>
        </ul>
      </nav>
    </header>
  );
}

export default Header;
