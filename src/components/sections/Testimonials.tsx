"use client";

import Container from '../ui/Container';
import Card from '../ui/Card';
import { motion } from "framer-motion";
import { useInView } from "@/hooks/useInView";

const testimonials = [
  {
    quote: "Team Collaboration ID membantu tim kami mengelola server game dengan lebih efisien. Teknologi yang digunakan sangat stabil dan memungkinkan kami untuk memantau performa dengan lebih baik.",
    author: "Budi Santoso",
    role: "Administrator Server",
    organization: "Kota Surabaya",
    rating: 5
  },
  {
    quote: "Fitur optimasi server dan monitoring pemain sangat bermanfaat. Dengan Team Collaboration ID, kami dapat meningkatkan pengalaman bermain game tanpa khawatir tentang downtime.",
    author: "Siti Rahayu",
    role: "Manager Operasional",
    organization: "Kabupaten Bandung",
    rating: 5
  },
  {
    quote: "Tim support dari Team Collaboration ID sangat responsif. Mereka selalu siap membantu ketika kami menghadapi masalah teknis dengan server game kami.",
    author: "Ahmad Hidayat",
    role: "Lead Game Developer",
    organization: "Kota Medan",
    rating: 5
  }
];

export default function Testimonials() {
  const [ref, isInView] = useInView();

  return (
    <section
      ref={ref as React.RefObject<HTMLElement>}
      className="py-20 bg-gray-50" id="testimonials">
      <Container>
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.9 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            Apa Kata Pengguna Layanan Kami
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Testimoni dari tim yang telah menggunakan solusi server game dari Team Collaboration ID
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <Card
              key={index}
              variant="elevated"
              className="hover:shadow-xl transition-shadow duration-300"
            >
              <div className="p-8">
                {/* Rating Stars */}
                <div className="flex mb-6">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <svg
                      key={i}
                      className="w-5 h-5 text-yellow-400"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                    >
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                  ))}
                </div>

                {/* Quote */}
                <blockquote className="text-gray-600 mb-6">
                  &quot;{testimonial.quote}&quot;
                </blockquote>

                {/* Author Info */}
                <div className="flex items-center">
                  <div className="flex-1">
                    <div className="font-semibold text-gray-900">
                      {testimonial.author}
                    </div>
                    <div className="text-sm text-gray-600">
                      {testimonial.role}
                    </div>
                    <div className="text-sm text-blue-600">
                      {testimonial.organization}
                    </div>
                  </div>
                </div>
              </div>
            </Card>
          ))}
        </div>
      </Container>
    </section>
  );
}
