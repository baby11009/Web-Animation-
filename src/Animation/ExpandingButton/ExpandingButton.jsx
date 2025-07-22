import { useEffect, useRef, useState } from "react";
import { AnimatePresence, m, motion } from "framer-motion";
import { useAppContext } from "../../Context/useContext";

export default function ExpandingButton() {
  const { lenis } = useAppContext();
  const [modalOpen, setModalOpen] = useState(false);
  const [modalStyle, setModalStyle] = useState(null);
  const btnRef = useRef(null);

  const openModal = () => {
    const rect = btnRef.current.getBoundingClientRect();

    setModalStyle({
      top: rect.top,
      left: rect.left,
      width: rect.width,
      height: rect.height,
      y: 0,
    });
    setModalOpen(true);
  };

  const closeModal = () => {
    // const rect = btnRef.current.getBoundingClientRect();

    // setModalStyle({
    //   top: rect.top,
    //   left: rect.left,
    //   width: rect.width,
    //   height: rect.height,
    //   scale: 1,
    // });
    setTimeout(() => {
      setModalOpen(false);
    }, 0);
  };

  useEffect(() => {
    if (modalOpen) {
      document.body.style.overflow = "hidden";
      lenis.stop();
    } else {
      setTimeout(() => {
        document.body.style.overflow = "auto";
        lenis.start();
      }, 500); // Match the duration of the exit animation
    }
  }, [modalOpen]);

  return (
    <div className='h-screen w-full flex items-center justify-center bg-gray-100'>
      <motion.button
        whileTap={{ scale: 0.99 }}
        transition={{ duration: 0.3 }}
        ref={btnRef}
        onClick={openModal}
        className='w-[30vw] h-[40vh] bg-blue-600 text-white rounded-lg shadow-md'
      >
        <div className='size-full p-6  text-left'>
          <div className='flex items-center justify-center'>Biigggg</div>
          <h2 className='text-2xl font-semibold mb-4'>I'm a Modal</h2>
          <p>This modal expanded from the button.</p>
        </div>
      </motion.button>

      <AnimatePresence>
        {modalOpen && modalStyle && (
          <motion.div
            initial={modalStyle}
            animate={{
              top: "50%",
              y: "-50%",
              left: modalStyle.left,
              width: "50vw",
              height: "50vh",
            }}
            exit={modalStyle}
            transition={{ duration: 0.5, ease: "easeInOut" }}
            className='fixed bg-blue-600 z-50 shadow-xl rounded-xl overflow-hidden origin-left'
            style={{ position: "fixed" }}
          >
            <div className='p-6'>
              <div className='flex items-center justify-center'>Biigggg</div>
              <motion.h2
                initial={{ y: 20 }}
                animate={{ y: 0 }}
                exit={{ y: 20 }}
                transition={{ duration: 0.5, ease: "easeInOut" }}
                className='text-2xl font-semibold mb-4'
              >
                I'm a Modal
              </motion.h2>
              <motion.p
                initial={{ y: 20 }}
                animate={{ y: 0 }}
                exit={{ y: 20 }}
                transition={{ duration: 0.5, ease: "easeInOut", delay: 0.2 }}
              >
                This modal expanded from the button.
              </motion.p>
              <button
                onClick={closeModal}
                className='mt-6 px-4 py-2 bg-red-500 text-white rounded'
              >
                Close
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
