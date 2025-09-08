// components/bookPage.tsx

import React from 'react';

// Terima props 'id', 'front', 'back', 'side', dan yang paling penting 'className'
interface BookPageProps {
  id: string;
  front: React.ReactNode;
  back: React.ReactNode;
  side: 'left' | 'right';
  className?: string; // Tambahkan prop ini
}

export default function BookPage({ id, front, back, side, className }: BookPageProps) {
  // Gabungkan class default dengan className yang dikirim dari luar
  const pageClasses = `book-page page-${side} ${className || ''}`.trim();

  return (
    <div className={pageClasses} id={id}>
      <div className="page-front">
        {front}
      </div>
      <div className="page-back">
        {back}
      </div>
    </div>
  );
}