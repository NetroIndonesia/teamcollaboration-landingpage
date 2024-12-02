"use client";

import Button from "../ui/Button";
import Container from "../ui/Container";
import { motion } from "framer-motion";
import { useInView } from "@/hooks/useInView";

export default function Hero() {
  const [ref, isInView] = useInView();

  return (
    <section
      ref={ref as React.RefObject<HTMLElement>}
      className="pt-16 bg-gradient-to-br from-gray-50 via-white to-blue-50 relative overflow-hidden"
    >
      <Container>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.9, delay: 0.2 }}
          >
            <h1 className="text-4xl md:text-5xl font-extrabold leading-tight text-gray-900 mb-6">
              Solusi Modern untuk{" "}
              <span className="text-blue-600">Pengelolaan Game Server</span>
            </h1>
            <p className="text-xl text-gray-600 mb-8">
              Optimalkan server game Anda dengan teknologi terbaik. Jaga
              performa, keamanan, dan kepuasan pemain di setiap permainan.
            </p>
            <div className="flex flex-wrap gap-4">
              <Button
                size="lg"
                onClick={(e) => {
                  e.preventDefault();
                  document.getElementById("kontak")?.scrollIntoView({
                    behavior: "smooth",
                  });
                }}
              >
                Hubungi Kami
              </Button>
              <Button
                variant="outline"
                size="lg"
                onClick={(e) => {
                  e.preventDefault();
                  document.getElementById("tentang")?.scrollIntoView({
                    behavior: "smooth",
                  });
                }}
              >
                Pelajari Lebih Lanjut
              </Button>
            </div>
          </motion.div>
          <div className="relative h-[600px] animate-pulse">
            <div className="absolute inset-0 bg-gray-200 rounded-lg" />
          </div>
        </div>
      </Container>
    </section>
  );
}
