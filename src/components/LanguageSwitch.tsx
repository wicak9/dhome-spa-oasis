import { motion } from 'framer-motion';
import { useLanguage } from '@/contexts/LanguageContext';

const LanguageSwitch = () => {
  const { language, setLanguage } = useLanguage();

  return (
    <div className="relative flex items-center gap-1 bg-secondary/50 backdrop-blur-sm rounded-full p-1 border border-border/50">
      <motion.div
        className="absolute h-8 w-10 rounded-full bg-primary"
        initial={false}
        animate={{
          x: language === 'id' ? 0 : 44,
        }}
        transition={{ type: 'spring', stiffness: 300, damping: 30 }}
      />
      <button
        onClick={() => setLanguage('id')}
        className={`relative z-10 px-3 py-1.5 text-sm font-medium rounded-full transition-colors duration-300 ${
          language === 'id' ? 'text-primary-foreground' : 'text-foreground/70 hover:text-foreground'
        }`}
      >
        ID
      </button>
      <button
        onClick={() => setLanguage('en')}
        className={`relative z-10 px-3 py-1.5 text-sm font-medium rounded-full transition-colors duration-300 ${
          language === 'en' ? 'text-primary-foreground' : 'text-foreground/70 hover:text-foreground'
        }`}
      >
        EN
      </button>
    </div>
  );
};

export default LanguageSwitch;
