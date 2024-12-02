"use client";
// import Image from "next/image";
import Container from "../ui/Container";
import Button from "../ui/Button";
import { useInView } from "@/hooks/useInView";
import { motion } from "framer-motion";

export default function About() {
  const [ref, isInView] = useInView({ threshold: 0.2 });

  return (
    <section
      ref={ref as React.RefObject<HTMLElement>}
      className="py-20 bg-gray-50"
      id="tentang"
    >
      <Container>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="relative h-[500px] animate-pulse">
            <div className="absolute inset-0 bg-gray-200 rounded-lg" />
          </div>
          {/* <div className="relative h-[500px]">
            <Image
              src="/about-illustration.png"
              alt="MILIHAKU Platform"
              fill
              className="object-contain"
            />
          </div> */}
          <div>
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              animate={isInView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.5 }}
            >
              <h2 className="text-4xl font-bold text-gray-900 mb-6">
                Platform Modern untuk Kesuksesan Pilkada Anda
              </h2>
              <div className="space-y-6 text-lg text-gray-600">
                <p>
                Team Collaboration ID adalah sekelompok profesional yang berdedikasi dalam pengembangan dan pengelolaan game server untuk berbagai platform. Dikenal dengan inovasi dan kerja sama tim yang kuat, kami telah membantu menciptakan solusi server-side yang andal, aman, dan efisien bagi komunitas game di seluruh dunia.

Berdiri sejak 2023, kami terus berkembang untuk menjawab tantangan di dunia teknologi dengan layanan yang mencakup pemrograman backend, integrasi plugin, hingga optimasi performa server.
                </p>
                <ul className="space-y-4">
                {[
  "Pengelolaan server yang mudah dan efisien",
  "Optimasi performa server secara real-time",
  "Keamanan tingkat tinggi untuk mencegah serangan DDoS",
  "Dukungan teknis profesional 24/7"
]
.map((item, i) => (
                    <li key={i} className="flex items-center gap-3">
                      <span className="flex-shrink-0 w-6 h-6 rounded-full bg-blue-100 text-blue-600 flex items-center justify-center">
                        ✓
                      </span>
                      {item}
                    </li>
                  ))}
                </ul>
                <div className="pt-4">
                  <Button
                    size="lg"
                    onClick={(e) => {
                      e.preventDefault();
                      document.getElementById("harga")?.scrollIntoView({
                        behavior: "smooth",
                      });
                    }}
                  >
                    Lihat Harga
                  </Button>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </Container>
    </section>
  );
}
