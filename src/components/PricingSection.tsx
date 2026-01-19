import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import { Check } from 'lucide-react';
import { useLanguage } from '@/contexts/LanguageContext';

const priceList = [
  { service: 'Full body massage', price90: '160k', price120: '190k' },
  { service: 'Massage & refleksi', price90: '180k', price120: '210k', popular: true },
  { service: 'Massage & totok wajah', price90: '175k', price120: '205k' },
  { service: 'Massage & scrub', price90: '175k', price120: '205k' },
  { service: 'Massage & kerokan', price90: '175k', price120: '205k' },
  { service: 'Massage & boreh', price90: '175k', price120: '205k' },
  { service: 'Massage & refleksi kaki', price90: '150k', price120: '180k' },
];

const PricingSection = () => {
  const { t } = useLanguage();
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  return (
    <section id="pricing" className="section-padding" ref={ref}>
      <div className="container mx-auto">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center max-w-2xl mx-auto mb-16"
        >
          <span className="inline-block text-spa-gold font-medium tracking-[0.3em] uppercase text-sm mb-4">
            {t('pricing.subtitle')}
          </span>
          <h2 className="font-serif text-4xl md:text-5xl lg:text-6xl font-light text-foreground mb-6">
            {t('pricing.title')}
          </h2>
          <div className="decorative-line mb-6" />
          <p className="text-muted-foreground text-lg">
            {t('pricing.description')}
          </p>
        </motion.div>

        {/* Pricing Table */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="max-w-4xl mx-auto"
        >
          <div className="glass-card rounded-3xl overflow-hidden">
            {/* Table Header */}
            <div className="grid grid-cols-3 gap-4 p-6 bg-primary text-primary-foreground">
              <div className="font-medium">{t('pricing.service')}</div>
              <div className="text-center font-medium">{t('pricing.90min')}</div>
              <div className="text-center font-medium">{t('pricing.120min')}</div>
            </div>

            {/* Table Body */}
            <div className="divide-y divide-border/50">
              {priceList.map((item, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: -20 }}
                  animate={isInView ? { opacity: 1, x: 0 } : {}}
                  transition={{ duration: 0.5, delay: 0.3 + index * 0.1 }}
                  className={`grid grid-cols-3 gap-4 p-6 transition-colors duration-300 hover:bg-spa-gold/5 ${
                    item.popular ? 'bg-spa-gold/10' : ''
                  }`}
                >
                  <div className="flex items-center gap-3">
                    {item.popular && (
                      <span className="px-2 py-0.5 bg-spa-gold/20 text-spa-brown text-xs font-medium rounded-full">
                        {t('pricing.popular')}
                      </span>
                    )}
                    <span className="font-medium text-foreground">{item.service}</span>
                  </div>
                  <div className="flex items-center justify-center">
                    <span className="font-serif text-xl text-spa-brown font-medium">
                      Rp {item.price90}
                    </span>
                  </div>
                  <div className="flex items-center justify-center">
                    <span className="font-serif text-xl text-spa-brown font-medium">
                      Rp {item.price120}
                    </span>
                  </div>
                </motion.div>
              ))}
            </div>

            {/* Table Footer */}
            <div className="p-6 bg-secondary/50 border-t border-border/50">
              <div className="flex flex-wrap items-center justify-center gap-6 text-sm text-muted-foreground">
                <div className="flex items-center gap-2">
                  <Check size={16} className="text-spa-gold" />
                  <span>Terapis profesional</span>
                </div>
                <div className="flex items-center gap-2">
                  <Check size={16} className="text-spa-gold" />
                  <span>Layanan ke rumah</span>
                </div>
                <div className="flex items-center gap-2">
                  <Check size={16} className="text-spa-gold" />
                  <span>Produk premium</span>
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default PricingSection;
