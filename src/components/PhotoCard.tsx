import { motion } from "framer-motion";

interface PhotoCardProps {
  avatarUrl: string;
  name: string;
}

export function PhotoCard({ avatarUrl, name }: PhotoCardProps) {
  return (
    <motion.div
      className="card-base relative flex items-center justify-center overflow-hidden bg-accent-subtle w-full h-full"
      initial={{ opacity: 0, scale: 0.9 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.6, delay: 0.15, ease: [0.22, 1, 0.36, 1] }}
    >
      {/* Decorative rings */}
      <motion.div
        className="absolute inset-0 flex items-center justify-center pointer-events-none"
        animate={{ rotate: 360 }}
        transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
      >
        <div className="w-48 h-48 rounded-full border border-accent/10" />
      </motion.div>
      <motion.div
        className="absolute inset-0 flex items-center justify-center pointer-events-none"
        animate={{ rotate: -360 }}
        transition={{ duration: 30, repeat: Infinity, ease: "linear" }}
      >
        <div className="w-60 h-60 rounded-full border border-accent/6 border-dashed" />
      </motion.div>

      {/* Profile photo */}
      <motion.div
        animate={{ y: [0, -6, 0] }}
        transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
        className="relative z-10"
      >
        <motion.div
          className="relative"
          whileHover={{ scale: 1.05 }}
          transition={{ type: "spring", stiffness: 300, damping: 20 }}
        >
          {/* Glow effect */}
          <div className="absolute inset-0 rounded-full bg-accent/20 blur-xl scale-110" />

          <img
            src={avatarUrl}
            alt={name}
            width={120}
            height={120}
            className="relative w-28 h-28 lg:w-36 lg:h-36 rounded-full object-cover border-4 border-white shadow-xl"
          />

          {/* Online indicator */}
          <motion.div
            className="absolute bottom-1 right-1 w-4 h-4 bg-emerald-400 rounded-full border-2 border-white"
            animate={{ scale: [1, 1.2, 1] }}
            transition={{ duration: 2, repeat: Infinity }}
          />
        </motion.div>
      </motion.div>
    </motion.div>
  );
}
