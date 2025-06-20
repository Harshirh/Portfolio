import Link from 'next/link';

export default function Footer() {
  return (
    <footer className="relative bg-gradient-to-b from-gray-900 via-gray-950 to-black py-12">
      {/* Grid pattern overlay */}
      <div className="absolute inset-0 bg-[url('/grid.svg')] bg-center [mask-image:linear-gradient(180deg,white,rgba(255,255,255,0))]"></div>
      
      {/* Gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-indigo-500/5 via-purple-500/5 to-transparent"></div>
      
      <div className="container mx-auto px-4 relative">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="col-span-1 md:col-span-2">
            <h3 className="text-2xl font-bold text-gradient mb-4">Harhith</h3>
            <p className="text-gray-400 mb-6 max-w-md">
              A passionate web developer crafting beautiful and functional digital experiences.
            </p>
            <div className="flex space-x-4">
              {[
                { name: 'GitHub', href: '#' },
                { name: 'LinkedIn', href: '#' },
                { name: 'Twitter', href: '#' }
              ].map((social) => (
                <a
                  key={social.name}
                  href={social.href}
                  className="text-gray-400 hover:text-white transition-colors"
                >
                  {social.name}
                </a>
              ))}
            </div>
          </div>
          <div>
            <h4 className="text-lg font-semibold text-white mb-4">Quick Links</h4>
            <ul className="space-y-2">
              {[
                { name: 'Home', href: '/' },
                { name: 'About', href: '/about' },
                { name: 'Projects', href: '/projects' },
                { name: 'Contact', href: '/contact' }
              ].map((link) => (
                <li key={link.name}>
                  <Link
                    href={link.href}
                    className="text-gray-400 hover:text-white transition-colors"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h4 className="text-lg font-semibold text-white mb-4">Contact</h4>
            <ul className="space-y-2">
              <li className="text-gray-400">contact@example.com</li>
              <li className="text-gray-400">San Francisco, CA</li>
            </ul>
          </div>
        </div>
        
        {/* Divider with gradient */}
        <div className="relative mt-12 pt-8">
          <div className="absolute inset-0 flex items-center">
            <div className="w-full border-t border-gray-800"></div>
          </div>
          <div className="relative flex justify-center">
            <span className="bg-gradient-to-b from-gray-900 via-gray-950 to-black px-4 text-gray-400">
              © {new Date().getFullYear()} Harhith. All rights reserved.
            </span>
          </div>
        </div>
      </div>
    </footer>
  );
} 