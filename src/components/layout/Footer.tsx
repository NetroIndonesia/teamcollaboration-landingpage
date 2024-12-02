import Link from 'next/link';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Brand */}
          <div className="col-span-1">
            <Link href="/" className="flex items-center">
              <span className="text-2xl font-bold text-blue-600">TEAM COLLABORATION ID</span>
            </Link>
            <p className="mt-4 text-sm text-gray-600">
            Team Collaboration ID adalah solusi lengkap untuk pengembangan dan pengelolaan game server yang andal dan inovatif.
            </p>
          </div>

          {/* Links */}
          <div>
            <h3 className="text-sm font-semibold text-gray-900 tracking-wider uppercase">Produk</h3>
            <ul className="mt-4 space-y-4">
              <li>
                <Link href="#fitur" className="text-sm text-gray-600 hover:text-blue-600">
                  Fitur
                </Link>
              </li>
              <li>
                <Link href="#harga" className="text-sm text-gray-600 hover:text-blue-600">
                  Harga
                </Link>
              </li>
              <li>
                <Link href="#demo" className="text-sm text-gray-600 hover:text-blue-600">
                  Demo
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-sm font-semibold text-gray-900 tracking-wider uppercase">Perusahaan</h3>
            <ul className="mt-4 space-y-4">
              <li>
                <Link href="#tentang" className="text-sm text-gray-600 hover:text-blue-600">
                  Tentang Kami
                </Link>
              </li>
              <li>
                <Link href="#blog" className="text-sm text-gray-600 hover:text-blue-600">
                  Blog
                </Link>
              </li>
              <li>
                <Link href="#karir" className="text-sm text-gray-600 hover:text-blue-600">
                  Karir
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-sm font-semibold text-gray-900 tracking-wider uppercase">Dukungan</h3>
            <ul className="mt-4 space-y-4">
              <li>
                <Link href="#bantuan" className="text-sm text-gray-600 hover:text-blue-600">
                  Pusat Bantuan
                </Link>
              </li>
              <li>
                <Link href="#kontak" className="text-sm text-gray-600 hover:text-blue-600">
                  Hubungi Kami
                </Link>
              </li>
              <li>
                <Link href="#kebijakan" className="text-sm text-gray-600 hover:text-blue-600">
                  Kebijakan Privasi
                </Link>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-8 border-t border-gray-200 pt-8">
          <p className="text-center text-sm text-gray-600">
            © {currentYear} Team Collaboration ID. Hak Cipta Dilindungi.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;