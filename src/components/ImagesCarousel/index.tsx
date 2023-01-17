import { useState } from 'react'

import { AiOutlineLeft, AiOutlineRight } from 'react-icons/ai'

import Image from 'next/image';
import styles from './styles.module.scss'

interface ImagesCarouselProps {
  images: string[];

  keyprefix?: string;

  height?: number | string;
  width?: number | string;
}

export default function ImagesCarousel({ images, keyprefix = '', height, width }: ImagesCarouselProps) {

  const [selectedIndex, setSelectedIndex] = useState(0)
  const [animating, setAnimating] = useState<'prev' | 'next' | null>(null)

  const showImages = images.length > 1 && [
    selectedIndex - 2 < 0 ? images[images.length + selectedIndex - 2] : images[selectedIndex - 2],
    selectedIndex - 1 < 0 ? images[images.length + selectedIndex - 1] : images[selectedIndex - 1],
    images[selectedIndex],
    images[(selectedIndex + 1) % images.length],
    images[(selectedIndex + 2) % images.length],
  ];

  function handleAnimationEnd() {
    if (animating === 'prev') {
      handlePrev();
    }

    if (animating === 'next') {
      handleNext();
    }
  }

  function handleNext() {
    setSelectedIndex(prev => (prev + 1) % images.length)
    setAnimating(null)
  }

  function handlePrev() {
    setSelectedIndex(prev => prev - 1 < 0 ? images.length - 1 : prev - 1)
    setAnimating(null)
  }


  return (
    <div style={{ height, width, position: 'relative' }}>
      <div className={styles.imageContainer} >
        {showImages ? showImages.map((image, i) => (
          <Image
            src={image}
            alt={'number ' + i}
            fill
            style={{ objectFit: 'contain' }}
            className={`${styles[`image-${i}`]} ${animating ? styles[`${animating}-${i}`] : ''}`}
            key={keyprefix + i}
            onAnimationEnd={i === 2 ? handleAnimationEnd : undefined}
          />
        )) : <Image
          src={images[0]}
          alt={'number 1'}
          fill
          style={{ objectFit: 'contain' }}
        />}
      </div>
      {images.length > 1 && <>
        <button onClick={() => setAnimating('prev')} className={styles.imageControl} style={{ left: 0 }}><AiOutlineLeft /></button>
        <button onClick={() => setAnimating('next')} className={styles.imageControl} style={{ right: 0 }}><AiOutlineRight /></button>
      </>}
    </div >
  )
}