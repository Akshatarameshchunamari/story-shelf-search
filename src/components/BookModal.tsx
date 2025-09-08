import { useState } from 'react';
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from '@/components/ui/dialog';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { ExternalLink, Calendar, Users, BookOpen, Globe } from 'lucide-react';

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

interface BookModalProps {
  book: Book;
  isOpen: boolean;
  onClose: () => void;
}

export const BookModal = ({ book, isOpen, onClose }: BookModalProps) => {
  const [imageError, setImageError] = useState(false);

  const coverUrl = book.cover_i && !imageError
    ? `https://covers.openlibrary.org/b/id/${book.cover_i}-L.jpg`
    : null;

  const openLibraryUrl = `https://openlibrary.org${book.key}`;

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="max-w-2xl max-h-[90vh] overflow-y-auto">
        <DialogHeader>
          <DialogTitle className="text-xl font-bold text-primary pr-8">
            {book.title}
          </DialogTitle>
        </DialogHeader>

        <div className="grid md:grid-cols-3 gap-6">
          <div className="md:col-span-1">
            <div className="aspect-[3/4] relative overflow-hidden rounded-lg bg-muted shadow-card">
              {coverUrl ? (
                <img
                  src={coverUrl}
                  alt={book.title}
                  className="w-full h-full object-cover"
                  onError={() => setImageError(true)}
                />
              ) : (
                <div className="w-full h-full flex items-center justify-center bg-gradient-subtle">
                  <div className="text-center px-4">
                    <div className="text-4xl mb-4">📚</div>
                    <div className="text-sm text-muted-foreground font-medium">
                      {book.title}
                    </div>
                  </div>
                </div>
              )}
            </div>
          </div>

          <div className="md:col-span-2 space-y-4">
            {book.author_name && (
              <div className="flex items-start gap-2">
                <Users className="w-4 h-4 text-accent mt-1 flex-shrink-0" />
                <div>
                  <p className="text-sm font-medium text-muted-foreground">Authors</p>
                  <p className="text-sm">{book.author_name.join(', ')}</p>
                </div>
              </div>
            )}

            {book.first_publish_year && (
              <div className="flex items-start gap-2">
                <Calendar className="w-4 h-4 text-accent mt-1 flex-shrink-0" />
                <div>
                  <p className="text-sm font-medium text-muted-foreground">First Published</p>
                  <p className="text-sm">{book.first_publish_year}</p>
                </div>
              </div>
            )}

            {book.publisher && book.publisher.length > 0 && (
              <div className="flex items-start gap-2">
                <BookOpen className="w-4 h-4 text-accent mt-1 flex-shrink-0" />
                <div>
                  <p className="text-sm font-medium text-muted-foreground">Publishers</p>
                  <p className="text-sm">{book.publisher.slice(0, 3).join(', ')}</p>
                </div>
              </div>
            )}

            {book.language && book.language.length > 0 && (
              <div className="flex items-start gap-2">
                <Globe className="w-4 h-4 text-accent mt-1 flex-shrink-0" />
                <div>
                  <p className="text-sm font-medium text-muted-foreground">Languages</p>
                  <div className="flex gap-1 flex-wrap mt-1">
                    {book.language.slice(0, 5).map((lang, index) => (
                      <Badge key={index} variant="outline" className="text-xs">
                        {lang.toUpperCase()}
                      </Badge>
                    ))}
                  </div>
                </div>
              </div>
            )}

            {book.subject && book.subject.length > 0 && (
              <div>
                <p className="text-sm font-medium text-muted-foreground mb-2">Subjects</p>
                <div className="flex gap-1 flex-wrap">
                  {book.subject.slice(0, 8).map((subject, index) => (
                    <Badge key={index} variant="secondary" className="text-xs">
                      {subject}
                    </Badge>
                  ))}
                </div>
              </div>
            )}

            <div className="pt-4 border-t">
              <Button 
                onClick={() => window.open(openLibraryUrl, '_blank')}
                className="w-full bg-gradient-primary hover:shadow-glow transition-all duration-300"
              >
                <ExternalLink className="w-4 h-4 mr-2" />
                View on Open Library
              </Button>
            </div>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
};