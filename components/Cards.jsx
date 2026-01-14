

'use client';
import React from 'react';
import Image from 'next/image';
import styles from './Cards.module.css';

export default function Cards({ imageSrc, name, price }) {
  return (
    <div className={styles.card}>
      <div className={styles.imageContainer}>
        <Image
          src={imageSrc}
          alt={name}
          width={309}
          height={557}
          className={styles.image}
        />
      </div>
      <div className={styles.info}>
        <h3 className={styles.name}>{name}</h3>
        <p className={styles.price}>{price}</p>
      </div>
    </div>
  );
}
