import { motion } from 'motion/react';
import { Box, Snowflake, Wind, Smartphone } from 'lucide-react';
import { ImageWithFallback } from './figma/ImageWithFallback';

export function Solution() {
  const features = [
    {
      icon: Wind,
      title: 'Zone Ambient',
      description: 'Pentru produse care nu necesită refrigerare',
      color: 'from-amber-500 to-orange-500',
      bgColor: 'bg-amber-50',
    },
    {
      icon: Box,
      title: 'Zone Fresh (Refrigerat)',
      description: 'Produse proaspete menținute la temperatura optimă',
      color: 'from-emerald-500 to-green-500',
      bgColor: 'bg-emerald-50',
    },
    {
      icon: Snowflake,
      title: 'Zone Frozen (Congelat)',
      description: 'Produse congelate păstrate perfect',
      color: 'from-cyan-500 to-blue-500',
      bgColor: 'bg-cyan-50',
    },
  ];

  return (
    <section className="h-screen flex items-center py-20 bg-gradient-to-br from-emerald-50 to-cyan-50 overflow-y-auto">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-emerald-600 text-white rounded-full mb-6">
            <Box className="w-4 h-4" />
            <span className="text-sm font-medium">Soluția</span>
          </div>
          <h2 className="text-5xl font-bold mb-4 text-gray-900">
            Rețea de Lockere Inteligente
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Sistem automatizat cu 3 zone de temperatură pentru toate nevoile tale alimentare
          </p>
        </motion.div>

        <div className="max-w-6xl mx-auto mb-16">
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="relative rounded-3xl overflow-hidden shadow-2xl"
          >
            <ImageWithFallback
              src="https://images.unsplash.com/photo-1617021483925-a331d536133d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzbWFydCUyMGxvY2tlciUyMGRlbGl2ZXJ5JTIwc3lzdGVtfGVufDF8fHx8MTc3Mzg0ODIyM3ww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
              alt="Smart locker system"
              className="w-full h-96 object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-emerald-900/80 via-emerald-900/40 to-transparent" />
            <div className="absolute bottom-8 left-8 right-8 text-white">
              <h3 className="text-3xl font-bold mb-2">Tehnologie Avansată</h3>
              <p className="text-lg text-emerald-100">
                Lockere dotate cu sistem inteligent de control al temperaturii
              </p>
            </div>
          </motion.div>
        </div>

        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="relative"
            >
              <div className={`${feature.bgColor} rounded-2xl p-8 h-full border-2 border-white shadow-lg hover:shadow-xl transition-shadow`}>
                <div className={`w-16 h-16 rounded-xl bg-gradient-to-br ${feature.color} flex items-center justify-center mb-6`}>
                  <feature.icon className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-2xl font-bold mb-3 text-gray-900">{feature.title}</h3>
                <p className="text-gray-700">{feature.description}</p>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          viewport={{ once: true }}
          className="mt-16 bg-white rounded-3xl p-12 shadow-xl max-w-4xl mx-auto"
        >
          <div className="flex items-center gap-6 mb-6">
            <div className="w-16 h-16 rounded-full bg-gradient-to-br from-emerald-500 to-cyan-500 flex items-center justify-center flex-shrink-0">
              <Smartphone className="w-8 h-8 text-white" />
            </div>
            <div>
              <h3 className="text-3xl font-bold text-gray-900">Aplicație Mobilă Intuitivă</h3>
              <p className="text-lg text-gray-600">Controlează totul din palmă</p>
            </div>
          </div>
          <ul className="space-y-4 text-gray-700">
            <li className="flex items-start gap-3">
              <span className="text-emerald-600 font-bold text-xl">✓</span>
              <span>Comandă online produse fresh de la retaileri locali</span>
            </li>
            <li className="flex items-start gap-3">
              <span className="text-emerald-600 font-bold text-xl">✓</span>
              <span>Primești notificare când comanda este livrată în locker</span>
            </li>
            <li className="flex items-start gap-3">
              <span className="text-emerald-600 font-bold text-xl">✓</span>
              <span>Ridici rapid în drumul tău, fără cozi sau așteptare</span>
            </li>
            <li className="flex items-start gap-3">
              <span className="text-emerald-600 font-bold text-xl">✓</span>
              <span>Produsele sunt menținute la temperatura perfectă până la ridicare</span>
            </li>
          </ul>
        </motion.div>
      </div>
    </section>
  );
}