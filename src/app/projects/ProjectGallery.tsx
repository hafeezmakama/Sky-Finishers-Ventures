'use client';

import Image from 'next/image';
import { useEffect, useRef, useState } from 'react';
import styles from './projects.module.css';

const filters = [
  'All work',
  'Painting',
  'Decorative Finishes',
  'POP & Gypsum',
  'Screeding & Skimming',
  'Interior Decoration',
] as const;

type Filter = (typeof filters)[number];

type GalleryItem = {
  src: string;
  alt: string;
  category: Exclude<Filter, 'All work'>;
};

const galleryItems: GalleryItem[] = [
  {
    src: '/images/sky%20finishers/IMG-20261002-WA0030.jpg',
    alt: 'Painted exterior facade with decorative gate details',
    category: 'Painting',
  },
  {
    src: '/images/sky%20finishers/painting-1.jpg',
    alt: 'Staircase wall with painted decorative panel moulding',
    category: 'Painting',
  },
  {
    src: '/images/sky%20finishers/IMG-20261002-WA0054.jpg',
    alt: 'Bright interior with finished walls and recessed ceiling lighting',
    category: 'Painting',
  },
  {
    src: '/images/sky%20finishers/IMG-20261002-WA0022.jpg',
    alt: 'Close view of a light-coloured textured wall finish',
    category: 'Decorative Finishes',
  },
  {
    src: '/images/sky%20finishers/IMG-20261002-WA0043.jpg',
    alt: 'Blue-grey decorative texture applied to an exterior wall',
    category: 'Decorative Finishes',
  },
  {
    src: '/images/sky%20finishers/decorative-painting.jpg',
    alt: 'Exterior wall featuring contrasting decorative finishes',
    category: 'Decorative Finishes',
  },
  {
    src: '/images/sky%20finishers/stucco-1.jpg',
    alt: 'Decorative stucco wall finish',
    category: 'Decorative Finishes',
  },
  {
    src: '/images/sky%20finishers/pop-gypsum.jpeg',
    alt: 'Living room with a detailed POP ceiling and recessed lighting',
    category: 'POP & Gypsum',
  },
  {
    src: '/images/sky%20finishers/IMG-20261002-WA0010.jpg',
    alt: 'Geometric ceiling design with integrated lighting',
    category: 'POP & Gypsum',
  },
  {
    src: '/images/sky%20finishers/IMG-20261002-WA0011.jpg',
    alt: 'Ornamental POP ceiling with layered decorative detailing',
    category: 'POP & Gypsum',
  },
  {
    src: '/images/sky%20finishers/pop-1.jpg',
    alt: 'Example of a POP ceiling finish',
    category: 'POP & Gypsum',
  },
  {
    src: '/images/sky%20finishers/screeding-skimming.jpg',
    alt: 'Wall surface prepared with screeding and skimming',
    category: 'Screeding & Skimming',
  },
  {
    src: '/images/sky%20finishers/black-screeding.jpg',
    alt: 'Example of a screeded wall surface',
    category: 'Screeding & Skimming',
  },
  {
    src: '/images/sky%20finishers/interior-decoration.jpg',
    alt: 'Interior ceiling with decorative detailing and soft lighting',
    category: 'Interior Decoration',
  },
  {
    src: '/images/sky%20finishers/IMG-20261002-WA0028.jpg',
    alt: 'Finished bright interior with clean walls and ceiling',
    category: 'Interior Decoration',
  },
  {
    src: '/images/sky%20finishers/TV-stand-1.jpg',
    alt: 'Custom TV stand and fitted interior feature',
    category: 'Interior Decoration',
  },
  {
    src: '/images/sky%20finishers/TV-stand-2.jpg',
    alt: 'Built-in media wall with illuminated display niches',
    category: 'Interior Decoration',
  },
  {
    src: '/images/sky%20finishers/TV-stand-3.jpg',
    alt: 'Custom TV stand and living room feature wall',
    category: 'Interior Decoration',
  },
];

export default function ProjectGallery() {
  const [activeFilter, setActiveFilter] = useState<Filter>('All work');
  const [selectedItem, setSelectedItem] = useState<GalleryItem | null>(null);
  const dialogRef = useRef<HTMLDialogElement>(null);

  useEffect(() => {
    const dialog = dialogRef.current;
    if (!dialog) return;

    if (selectedItem && !dialog.open) {
      dialog.showModal();
    } else if (!selectedItem && dialog.open) {
      dialog.close();
    }
  }, [selectedItem]);

  const visibleItems =
    activeFilter === 'All work'
      ? galleryItems
      : galleryItems.filter((item) => item.category === activeFilter);

  return (
    <>
      <div className={styles.filterBar} role="group" aria-label="Filter work by service">
        {filters.map((filter) => (
          <button
            key={filter}
            type="button"
            className={`${styles.filterButton} ${
              activeFilter === filter ? styles.filterButtonActive : ''
            }`}
            aria-pressed={activeFilter === filter}
            onClick={() => setActiveFilter(filter)}
          >
            {filter}
          </button>
        ))}
      </div>

      <p className={styles.resultCount} aria-live="polite">
        Showing {visibleItems.length} {visibleItems.length === 1 ? 'example' : 'examples'}
      </p>

      <div className={styles.galleryGrid}>
        {visibleItems.map((item) => (
          <button
            key={item.src}
            type="button"
            className={styles.galleryCard}
            aria-label={`View image: ${item.alt}`}
            onClick={() => setSelectedItem(item)}
          >
            <span className={styles.imageFrame}>
              <Image
                src={item.src}
                alt={item.alt}
                fill
                sizes="(max-width: 640px) 100vw, (max-width: 960px) 50vw, 33vw"
                className={styles.galleryImage}
              />
              <span className={styles.imageOverlay} aria-hidden="true">
                <span className={styles.expandIcon}>+</span>
              </span>
            </span>
            <span className={styles.cardCaption}>
              <span>{item.category}</span>
              <span className={styles.captionArrow} aria-hidden="true">
                ↗
              </span>
            </span>
          </button>
        ))}
      </div>

      <dialog
        ref={dialogRef}
        className={styles.viewer}
        aria-label="Enlarged work image"
        onClick={(event) => {
          if (event.target === event.currentTarget) setSelectedItem(null);
        }}
        onClose={() => setSelectedItem(null)}
      >
        {selectedItem && (
          <div className={styles.viewerContent}>
            <button
              type="button"
              className={styles.viewerClose}
              aria-label="Close enlarged image"
              onClick={() => setSelectedItem(null)}
            >
              <span aria-hidden="true">×</span>
            </button>
            <div className={styles.viewerImageFrame}>
              <Image
                src={selectedItem.src}
                alt={selectedItem.alt}
                fill
                sizes="(max-width: 760px) 92vw, 1100px"
                className={styles.viewerImage}
              />
            </div>
            <p className={styles.viewerCaption}>{selectedItem.alt}</p>
          </div>
        )}
      </dialog>
    </>
  );
}
