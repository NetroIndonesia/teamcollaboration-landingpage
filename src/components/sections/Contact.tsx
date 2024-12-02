"use client";

import Container from "../ui/Container";
import Button from "../ui/Button";
import Card from "../ui/Card";
import { motion } from "framer-motion";
import { useInView } from "@/hooks/useInView";

export default function Contact() {
  const [ref, isInView] = useInView();

  return (
    <section
      ref={ref as React.RefObject<HTMLElement>}
      className="py-20 bg-gray-900"
      id="kontak"
    >
      <Container>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Contact Info */}
          <div>
            <motion.div
              initial={{ opacity: 0 }}
              animate={isInView ? { opacity: 1 } : {}}
              transition={{ duration: 0.9 }}
            >
              <h2 className="text-4xl font-bold text-gray-100 mb-6">
                Hubungi Kami
              </h2>
              <p className="text-xl text-gray-600 mb-8">
                Tim kami siap membantu Anda menemukan solusi terbaik untuk
                Server Anda
              </p>
            </motion.div>

            <div className="space-y-6">
              <motion.div
                initial={{ opacity: 0, x: -50 }}
                animate={isInView ? { opacity: 1, x: 0 } : {}}
                transition={{ duration: 0.5 }}
              >
                <h3 className="text-lg font-semibold text-gray-300 mb-2">
                  Kantor Pusat
                </h3>
                <p className="text-gray-600">
                  Jl. Teknologi No. 123
                  <br />
                  Jakarta Selatan, 12345
                  <br />
                  Indonesia
                </p>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, x: -50 }}
                animate={isInView ? { opacity: 1, x: 0 } : {}}
                transition={{ duration: 1 }}
              >
                <h3 className="text-lg font-semibold text-gray-300 mb-2">
                  Kontak Langsung
                </h3>
                <div className="space-y-2">
                  <p className="text-gray-600">Email: netroidproject@gmail.com</p>
                  <p className="text-gray-600">Phone: (+62) 85727833601</p>
                  <p className="text-gray-600">WhatsApp: +63 946 372 6502</p>
                </div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, x: -50 }}
                animate={isInView ? { opacity: 1, x: 0 } : {}}
                transition={{ duration: 1.5 }}
              >
                <h3 className="text-lg font-semibold text-gray-300 mb-2">
                  Jam Operasional
                </h3>
                <p className="text-gray-600">
                  Senin - Jumat: 09:00 - 18:00
                  <br />
                  Sabtu: 09:00 - 15:00
                </p>
              </motion.div>
            </div>
          </div>

          {/* Contact Form */}
          <Card variant="elevated" className="p-8">
            <form className="space-y-6">
              <div>
                <label
                  htmlFor="name"
                  className="block text-sm font-medium text-gray-700 mb-2"
                >
                  Nama Lengkap
                </label>
                <input
                  type="text"
                  id="name"
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                  placeholder="Masukkan nama lengkap"
                />
              </div>

              <div>
                <label
                  htmlFor="email"
                  className="block text-sm font-medium text-gray-700 mb-2"
                >
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                  placeholder="nama@email.com"
                />
              </div>

              <div>
                <label
                  htmlFor="phone"
                  className="block text-sm font-medium text-gray-700 mb-2"
                >
                  Nomor Telepon
                </label>
                <input
                  type="tel"
                  id="phone"
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                  placeholder="08xx-xxxx-xxxx"
                />
              </div>

              <div>
                <label
                  htmlFor="message"
                  className="block text-sm font-medium text-gray-700 mb-2"
                >
                  Pesan
                </label>
                <textarea
                  id="message"
                  rows={4}
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                  placeholder="Tuliskan pesan Anda..."
                />
              </div>

              <Button type="submit" fullWidth size="lg">
                Kirim Pesan
              </Button>
            </form>
          </Card>
        </div>
      </Container>
    </section>
  );
}
