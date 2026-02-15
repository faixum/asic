'use client';

import { useState } from 'react';
import { X, ChevronLeft, ChevronRight } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

interface GalleryImage {
  src: string;
  alt: string;
  caption?: string;
}

interface EventGalleryProps {
  images: GalleryImage[];
}

export default function EventGallery({ images }: EventGalleryProps) {
  const [selectedImage, setSelectedImage] = useState<number | null>(null);

  const openLightbox = (index: number) => {
    setSelectedImage(index);
    document.body.style.overflow = 'hidden';
  };

  const closeLightbox = () => {
    setSelectedImage(null);
    document.body.style.overflow = 'unset';
  };

  const goToPrevious = () => {
    if (selectedImage !== null) {
      setSelectedImage(selectedImage === 0 ? images.length - 1 : selectedImage - 1);
    }
  };

  const goToNext = () => {
    if (selectedImage !== null) {
      setSelectedImage(selectedImage === images.length - 1 ? 0 : selectedImage + 1);
    }
  };

  return (
    <>
      {/* Gallery Grid */}
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
        {images.map((image, index) => (
          <motion.div
            key={index}
            className="relative aspect-square overflow-hidden rounded-xl cursor-pointer group"
            onClick={() => openLightbox(index)}
            whileHover={{ scale: 1.05 }}
            transition={{ duration: 0.3 }}
          >
            <img
              src={image.src}
              alt={image.alt}
              className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
              loading="lazy"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
              <div className="absolute bottom-0 left-0 right-0 p-4">
                <p className="text-white text-sm font-medium">{image.caption || image.alt}</p>
              </div>
            </div>
          </motion.div>
        ))}
      </div>

      {/* Lightbox Modal */}
      <AnimatePresence>
        {selectedImage !== null && (
          <motion.div
            className="fixed inset-0 z-[200] flex items-center justify-center"
            style={{ background: 'rgba(0,0,0,0.95)' }}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={closeLightbox}
          >
            {/* Close Button */}
            <button
              className="absolute top-4 right-4 sm:top-8 sm:right-8 w-12 h-12 rounded-full flex items-center justify-center z-10 transition-all duration-300"
              style={{
                background: 'rgba(255,255,255,0.1)',
                backdropFilter: 'blur(10px)',
                border: '1px solid rgba(255,255,255,0.2)',
              }}
              onClick={closeLightbox}
              onMouseEnter={(e) => {
                e.currentTarget.style.background = 'rgba(245,197,24,0.2)';
                e.currentTarget.style.borderColor = 'rgba(245,197,24,0.4)';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.background = 'rgba(255,255,255,0.1)';
                e.currentTarget.style.borderColor = 'rgba(255,255,255,0.2)';
              }}
            >
              <X className="w-6 h-6 text-white" />
            </button>

            {/* Previous Button */}
            {images.length > 1 && (
              <button
                className="absolute left-4 sm:left-8 w-12 h-12 rounded-full flex items-center justify-center transition-all duration-300"
                style={{
                  background: 'rgba(255,255,255,0.1)',
                  backdropFilter: 'blur(10px)',
                  border: '1px solid rgba(255,255,255,0.2)',
                }}
                onClick={(e) => {
                  e.stopPropagation();
                  goToPrevious();
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.background = 'rgba(245,197,24,0.2)';
                  e.currentTarget.style.borderColor = 'rgba(245,197,24,0.4)';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.background = 'rgba(255,255,255,0.1)';
                  e.currentTarget.style.borderColor = 'rgba(255,255,255,0.2)';
                }}
              >
                <ChevronLeft className="w-6 h-6 text-white" />
              </button>
            )}

            {/* Next Button */}
            {images.length > 1 && (
              <button
                className="absolute right-4 sm:right-8 w-12 h-12 rounded-full flex items-center justify-center transition-all duration-300"
                style={{
                  background: 'rgba(255,255,255,0.1)',
                  backdropFilter: 'blur(10px)',
                  border: '1px solid rgba(255,255,255,0.2)',
                }}
                onClick={(e) => {
                  e.stopPropagation();
                  goToNext();
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.background = 'rgba(245,197,24,0.2)';
                  e.currentTarget.style.borderColor = 'rgba(245,197,24,0.4)';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.background = 'rgba(255,255,255,0.1)';
                  e.currentTarget.style.borderColor = 'rgba(255,255,255,0.2)';
                }}
              >
                <ChevronRight className="w-6 h-6 text-white" />
              </button>
            )}

            {/* Image */}
            <motion.div
              className="relative max-w-7xl max-h-[90vh] mx-4"
              onClick={(e) => e.stopPropagation()}
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.8, opacity: 0 }}
              transition={{ duration: 0.3 }}
            >
              <img
                src={images[selectedImage].src}
                alt={images[selectedImage].alt}
                className="max-w-full max-h-[90vh] object-contain rounded-lg"
              />
              {images[selectedImage].caption && (
                <div className="absolute bottom-0 left-0 right-0 p-6 bg-gradient-to-t from-black/80 to-transparent rounded-b-lg">
                  <p className="text-white text-center text-lg">{images[selectedImage].caption}</p>
                </div>
              )}
            </motion.div>

            {/* Image Counter */}
            <div className="absolute bottom-4 sm:bottom-8 left-1/2 transform -translate-x-1/2 px-4 py-2 rounded-full text-white text-sm"
              style={{
                background: 'rgba(255,255,255,0.1)',
                backdropFilter: 'blur(10px)',
                border: '1px solid rgba(255,255,255,0.2)',
              }}
            >
              {selectedImage + 1} / {images.length}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
