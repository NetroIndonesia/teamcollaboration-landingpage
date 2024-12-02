"use client";

import Card from "../ui/Card";
import Container from "../ui/Container";
import { useInView } from "@/hooks/useInView";
import { motion } from "framer-motion";
import { LayoutDashboard, LineChart, Wallet2, Users } from "lucide-react";
const features = [
  {
    title: "Manajemen Server",
    description: "Kelola server game dengan mudah melalui satu dashboard intuitif",
    icon: LayoutDashboard,
  },
  {
    title: "Pemantauan Real-time",
    description: "Pantau performa server secara real-time untuk menjaga kestabilan",
    icon: LineChart,
  },
  {
    title: "Keamanan Terintegrasi",
    description: "Lindungi server Anda dari ancaman dengan sistem keamanan canggih",
    icon: ShieldCheck,
  },
  {
    title: "Kolaborasi Tim",
    description: "Koordinasikan anggota tim dengan alat kolaborasi yang efisien",
    icon: Users,
  },
];


export default function Features() {
  const [ref, isInView] = useInView({ threshold: 0.2 });

  return (
    <section
      ref={ref as React.RefObject<HTMLElement>}
      className="py-20 bg-gray-900"
      id="fitur"
    >
      <Container>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
        >
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-300 mb-4">
              Fitur Unggulan
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Tingkatkan Server Anda dengan fitur-fitur canggih
              yang kami sediakan
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature) => (
              <Card
                key={feature.title}
                variant="elevated"
                className="group text-center bg-gray-300 hover:bg-gradient-to-br from-gray-400 to-gray-800 transition-all duration-300"
              >
                <div className="mb-4 text-blue-600 group-hover:text-gray-100 flex items-center justify-center">
                  <feature.icon className="w-12 h-12" />
                </div>
                <h3 className="text-xl font-semibold mb-2 text-gray-900 group-hover:text-gray-100 animate-in fade-in duration-300">
                  {feature.title}
                </h3>
                <p className="text-gray-600 group-hover:text-gray-300 animate-in fade-in duration-300">
                  {feature.description}
                </p>
              </Card>
            ))}
          </div>
        </motion.div>
      </Container>
    </section>
  );
}
