const Footer = () => {
  return (
    <footer className="bg-gray-800 text-white px-32 py-8">
      <p className="text-sm">
        &copy; {new Date().getFullYear()} Birds.
      </p>
      <p className="text-xs mt-2">
        Follow us on{' '}
        <a href="https://instagram.com" className="text-blue-400 hover:underline">
          Instagram
        </a>{' '}
        and{' '}
        <a href="https://twitter.com" className="text-blue-400 hover:underline">
          Twitter
        </a>.
      </p>
    </footer>
  );
}

export default Footer;
