import React from 'react';
import { motion } from 'framer-motion';

const Header = () => (
  <>
    <motion.h1 className="fancy-title" initial={{ opacity: 0, y: -50 }} animate={{ opacity: 1, y: 0 }}>
      Ada-Too
    </motion.h1>
    <p className="date-text">Saturday, May 3rd, 2025 | Mass: 10 AM</p>
  </>
);

export default Header;
