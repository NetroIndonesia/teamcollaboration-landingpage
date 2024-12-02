"use client";

import Container from "../ui/Container";
import Card from "../ui/Card";
import Button from "../ui/Button";
import { motion } from "framer-motion";
import { useInView } from "@/hooks/useInView";

const plans = [
  {
    name: "Basic",
    price: "200K",
    period: "/bulan",
    description: "Paket untuk server kecil dan komunitas awal",
    features: [
      "Dashboard monitoring dasar",
      "Optimasi performa server",
      "Backup otomatis mingguan",
      "Support via email",
    ],
    highlighted: false,
  },
  {
    name: "Pro",
    price: "500K",
    period: "/bulan",
    description: "Paket untuk server menengah hingga besar",
    features: [
      "Semua fitur Basic",
      "Keamanan tingkat lanjut",
      "Analisis real-time performa server",
      "Dukungan teknis 24/7",
      "Integrasi plugin otomatis",
    ],
    highlighted: true,
  },
  {
    name: "Enterprise",
    price: "Custom",
    period: "",
    description: "Paket untuk perusahaan besar atau game publisher",
    features: [
      "Semua fitur Pro",
      "Infrastruktur server khusus",
      "Optimasi jaringan global",
      "Support khusus dengan SLA",
      "Integrasi API custom",
    ],
    highlighted: false,
  },
];

export default function Pricing() {
  const [ref, isInView] = useInView();

  return (
    <section
      ref={ref as React.RefObject<HTMLElement>}
      className="py-20 bg-gray-900"
      id="harga"
    >
      <Container>
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.9 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold text-gray-100 mb-4">
            Pilih Paket yang Sesuai
          </h2>
          <p className="text-xl text-gray-400 max-w-2xl mx-auto">
            Solusi fleksibel untuk mengelola dan mengoptimalkan server game Anda
          </p>
        </motion.div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {plans.map((plan, index) => (
            <motion.div
              key={plan.name}
              initial={
                index === 0
                  ? { opacity: 0, x: -50 }
                  : index === 1
                  ? { opacity: 0, y: 50 }
                  : { opacity: 0, x: 50 }
              }
              animate={
                isInView
                  ? index === 0
                    ? { opacity: 1, x: 0 }
                    : index === 1
                    ? { opacity: 1, y: 0 }
                    : { opacity: 1, x: 0 }
                  : {}
              }
              transition={{ duration: 0.7 }}
            >
              <Card
                variant={plan.highlighted ? "elevated" : "default"}
                className={`${
                  plan.highlighted
                    ? "border-2 border-blue-600 scale-105"
                    : "border border-gray-200"
                }`}
              >
                <div className="p-8">
                  <h3 className="text-2xl font-bold mb-2 text-gray-200">
                    {plan.name}
                  </h3>
                  <div className="mb-4">
                    <span className="text-4xl font-bold text-white">
                      {plan.price === "Custom"
                        ? "Custom"
                        : `Rp ${plan.price}`}
                    </span>
                    <span className="text-gray-400">{plan.period}</span>
                  </div>
                  <p className="text-gray-400 mb-6">{plan.description}</p>
                  <Button
                    variant={plan.highlighted ? "primary" : "outline"}
                    fullWidth
                    size="lg"
                  >
                    {plan.price === "Custom"
                      ? "Hubungi Kami"
                      : "Mulai Sekarang"}
                  </Button>
                  <ul className="mt-8 space-y-4">
                    {plan.features.map((feature) => (
                      <li key={feature} className="flex items-center gap-3">
                        <span className="flex-shrink-0 w-5 h-5 rounded-full bg-blue-100 text-blue-600 flex items-center justify-center text-sm">
                          ✓
                        </span>
                        <span className="text-gray-400">{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </Card>
            </motion.div>
          ))}
        </div>
      </Container>
    </section>
  );
}
