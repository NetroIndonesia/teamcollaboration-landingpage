"use client";

import Container from "../ui/Container";
import Card from "../ui/Card";
import { motion } from "framer-motion";
import { useInView } from "@/hooks/useInView";

const stats = [
  {
    number: '200+',
    label: 'Proyek Tim',
    description: 'Diselesaikan secara kolaboratif'
  },
  {
    number: '50+',
    label: 'Klien Bahagia',
    description: 'Menggunakan layanan kami'
  },
  {
    number: '99%',
    label: 'Keandalan Sistem',
    description: 'Mendukung kolaborasi tanpa hambatan'
  },
  {
    number: '24/7',
    label: 'Dukungan Tim',
    description: 'Siap membantu kapan saja'
  }
];

export default function Stats() {
  const [ref, isInView] = useInView();

  return (
    <section
      ref={ref as React.RefObject<HTMLElement>}
      className="py-20 bg-purple-700 text-white"
    >
      <Container>
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.9 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold mb-4">
            Team Collaboration ID
          </h2>
          <p className="text-xl text-purple-100 max-w-2xl mx-auto">
            Solusi kolaborasi terbaik untuk meningkatkan peforma server anda
          </p>
        </motion.div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {stats.map((stat, index) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, x: -50 }}
              animate={isInView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.7, delay: index * 0.2 }}
            >
              <Card
                variant="elevated"
                className="bg-white/10 backdrop-blur-lg border-white/20 border text-white"
              >
                <div className="text-center">
                  <div className="text-4xl font-bold mb-2 font-mono">
                    {stat.number}
                  </div>
                  <div className="text-xl font-semibold mb-2">
                    {stat.label}
                  </div>
                  <p className="text-purple-100 text-sm">
                    {stat.description}
                  </p>
                </div>
              </Card>
            </motion.div>
          ))}
        </div>
      </Container>
    </section>
  );
}
