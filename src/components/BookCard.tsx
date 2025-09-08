import { useState } from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { BookModal } from './BookModal';

interface Book {
  key: string;
  title: string;
  author_name?: string[];
  cover_i?: number;
  first_publish_year?: number;
  publisher?: string[];
  isbn?: string[];
  subject?: string[];
  language?: string[];
}

interface BookCardProps {
  book: Book;
}

export const BookCard = ({ book }: BookCardProps) => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [imageError, setImageError] = useState(false);

  const coverUrl = book.cover_i && !imageError
    ? `https://covers.openlibrary.org/b/id/${book.cover_i}-M.jpg`
    : null;

  const authors = book.author_name?.slice(0, 2).join(', ') || 'Unknown Author';
  const year = book.first_publish_year || '';

  return (
    <>
      <Card 
        className="group cursor-pointer transition-all duration-300 hover:shadow-book hover:-translate-y-1 bg-card border-border"
        onClick={() => setIsModalOpen(true)}
      >
        <CardContent className="p-4">
          <div className="aspect-[3/4] mb-3 relative overflow-hidden rounded-md bg-muted">
            {coverUrl ? (
              <img
                src={coverUrl}
                alt={book.title}
                className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
                onError={() => setImageError(true)}
              />
            ) : (
              <div className="w-full h-full flex items-center justify-center bg-gradient-subtle">
                <div className="text-center px-2">
                  <div className="text-2xl mb-2">📚</div>
                  <div className="text-xs text-muted-foreground font-medium">
                    {book.title.length > 40 ? `${book.title.substring(0, 40)}...` : book.title}
                  </div>
                </div>
              </div>
            )}
          </div>
          
          <div className="space-y-2">
            <h3 className="font-semibold text-sm leading-tight line-clamp-2 text-card-foreground group-hover:text-primary transition-colors">
              {book.title}
            </h3>
            
            <p className="text-xs text-muted-foreground line-clamp-1">
              {authors}
            </p>
            
            {year && (
              <Badge variant="secondary" className="text-xs">
                {year}
              </Badge>
            )}
          </div>
        </CardContent>
      </Card>

      <BookModal 
        book={book}
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
      />
    </>
  );
};