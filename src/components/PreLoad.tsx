// --- Preloader Component ---

import { AnimatePresence, motion, Variants } from "framer-motion";
import { useEffect, useState } from "react";
import { TbPointFilled } from "react-icons/tb";

// Animasi terminal yang mudah diedit
// animasinya teksnya itu kayak mesin ketik yang otentik
const PreLoad = () => {
  // --- SUPER EASY TO EDIT ---
  const words = [
    "Hello, visitor.",
    "Booting up portfolio...",
    "Compiling creative ideas...",
    "Welcome.",
  ];
  // -------------------------

  const [completedLines, setCompletedLines] = useState<string[]>([]);
  const [currentLine, setCurrentLine] = useState("");
  const [lineIndex, setLineIndex] = useState(0);
  const [charIndex, setCharIndex] = useState(0);
  const [show, setShow] = useState(true);

  useEffect(() => {
    // Jika semua baris sudah selesai diketik
    if (lineIndex >= words.length) {
      setTimeout(() => setShow(false), 1000); // Tunggu sejenak sebelum fade out
      return;
    }

    // Jika baris saat ini sudah selesai diketik
    if (charIndex >= words[lineIndex].length) {
      // Pindahkan baris yang sudah selesai ke completedLines
      // dan siapkan untuk baris berikutnya setelah jeda
      const timeout = setTimeout(() => {
        setCompletedLines((prev) => [...prev, words[lineIndex]]);
        setLineIndex(lineIndex + 1);
        setCharIndex(0);
        setCurrentLine("");
      }, 1000); // Jeda sebelum baris baru muncul
      return () => clearTimeout(timeout);
    }

    // Efek mengetik per huruf
    const typingTimeout = setTimeout(() => {
      setCurrentLine((prev) => prev + words[lineIndex][charIndex]);
      setCharIndex(charIndex + 1);
    }, 30); // Kecepatan mengetik

    return () => clearTimeout(typingTimeout);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [lineIndex, charIndex]);

  const cursorVariants: Variants = {
    blink: {
      opacity: [0, 1, 0],
      transition: {
        duration: 1,
        repeat: Infinity,
        repeatDelay: 0,
        ease: "linear",
        times: [0, 0.5, 1],
      },
    },
  };

  return (
    <AnimatePresence>
      {show && (
        <motion.div
          initial={{ opacity: 1 }}
          exit={{ opacity: 0, transition: { duration: 0.8 } }}
          className="fixed inset-0 z-50 flex justify-center items-center bg-[#111111] font-mono"
        >
          <div className="w-full max-w-md border-black border rounded-lg shadow-xl">
            <div className="flex mb-2 p-2 bg-gray-600 rounded-t-lg">
              <TbPointFilled className="text-red-500 w-7 h-7" />
              <TbPointFilled className="text-yellow-500 w-7 h-7" />
              <TbPointFilled className="text-green-500 w-7 h-7" />
            </div>
            <div className="p-4">
              {/* Render baris yang sudah selesai */}
              {completedLines.map((line, index) => (
                <div
                  key={index}
                  className="flex items-center text-xs md:text-sm text-gray-300 tracking-wider mb-2"
                >
                  <span className="text-cyan-400 mr-3">&gt;</span>
                  <span>{line}</span>
                </div>
              ))}

              {/* Render baris yang sedang diketik */}
              {lineIndex < words.length && (
                <div className="flex items-center text-xs md:text-sm text-gray-300 tracking-wider mb-2">
                  <span className="text-cyan-400 mr-3">&gt;</span>
                  <span>{currentLine}</span>
                  <motion.span
                    variants={cursorVariants}
                    animate="blink"
                    className="ml-2 w-1 h-4 md:h-5 bg-cyan-400"
                  />
                </div>
              )}
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default PreLoad;
