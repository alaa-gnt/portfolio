
export default function Footer() {
  return (
    <footer className="w-full bg-[#181818] text-gray-400 py-6 mt-16">
      <div className="max-w-6xl mx-auto flex flex-col sm:flex-row items-center justify-between px-4">
        <span className="text-sm">&copy; {new Date().getFullYear()} Alaa GNT. All rights reserved.</span>
        <div className="flex gap-4 mt-2 sm:mt-0">
          <a href="https://github.com/alaa-gnt" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors">GitHub</a>
          <a href="https://www.linkedin.com/in/alaa-guenat-365861241/" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors">LinkedIn</a>
          <a href="https://www.instagram.com/me._.alaa" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors">Instagram</a>
        </div>
      </div>
    </footer>
  );
}
