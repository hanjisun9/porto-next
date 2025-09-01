"use client";

interface BookPageProps {
  id: string;
  front: React.ReactNode;
  back: React.ReactNode;
  side: "left" | "right";
}

export default function BookPage({ id, front, back, side }: BookPageProps) {
  return (
    <div className={`book-page page-${side}`} id={id}>
      <div className="page-front">
        {front}
      </div>
      <div className="page-back">
        {back}
      </div>
    </div>
  );
}
