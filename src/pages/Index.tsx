import { useState, useEffect } from 'react';
import { SearchBar } from '@/components/SearchBar';
import { BookCard } from '@/components/BookCard';
import { useToast } from '@/components/ui/use-toast';
import { BookOpen, Sparkles } from 'lucide-react';

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

const Index = () => {
  const [books, setBooks] = useState<Book[]>([]);
  const [isLoading, setIsLoading] = useState(false);
  const [hasSearched, setHasSearched] = useState(false);
  const { toast } = useToast();

  const searchBooks = async (query: string) => {
    if (!query.trim()) {
      setBooks([]);
      setHasSearched(false);
      return;
    }

    setIsLoading(true);
    setHasSearched(true);

    try {
      const response = await fetch(
        `https://openlibrary.org/search.json?title=${encodeURIComponent(query)}&limit=24`
      );
      
      if (!response.ok) {
        throw new Error('Search failed');
      }

      const data = await response.json();
      setBooks(data.docs || []);
      
      if (data.docs.length === 0) {
        toast({
          title: "No books found",
          description: "Try searching with different keywords or check your spelling.",
        });
      }
    } catch (error) {
      console.error('Search error:', error);
      toast({
        title: "Search failed",
        description: "Please check your connection and try again.",
        variant: "destructive",
      });
      setBooks([]);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-gradient-subtle">
      {/* Header */}
      <header className="bg-card border-b border-border shadow-card">
        <div className="container mx-auto px-4 py-6">
          <div className="text-center mb-8">
            <div className="flex items-center justify-center gap-3 mb-4">
              <div className="p-3 bg-gradient-primary rounded-xl shadow-glow">
                <BookOpen className="w-8 h-8 text-primary-foreground" />
              </div>
              <h1 className="text-4xl font-bold text-primary">BookFinder</h1>
              <Sparkles className="w-6 h-6 text-accent" />
            </div>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Discover your next great read from millions of books in the Open Library
            </p>
          </div>
          
          <SearchBar onSearch={searchBooks} isLoading={isLoading} />
        </div>
      </header>

      {/* Main Content */}
      <main className="container mx-auto px-4 py-8">
        {!hasSearched && (
          <div className="text-center py-16">
            <div className="mb-8">
              <div className="w-24 h-24 bg-gradient-accent rounded-full flex items-center justify-center mx-auto mb-6 shadow-glow">
                <BookOpen className="w-12 h-12 text-accent-foreground" />
              </div>
              <h2 className="text-2xl font-semibold text-foreground mb-3">
                Start Your Literary Journey
              </h2>
              <p className="text-muted-foreground max-w-md mx-auto">
                Search for books by title, author, or subject to discover amazing reads from the world's largest digital library.
              </p>
            </div>
          </div>
        )}

        {isLoading && (
          <div className="text-center py-16">
            <div className="w-16 h-16 border-4 border-primary border-t-transparent rounded-full animate-spin mx-auto mb-4"></div>
            <p className="text-muted-foreground">Searching for books...</p>
          </div>
        )}

        {hasSearched && !isLoading && books.length === 0 && (
          <div className="text-center py-16">
            <div className="w-24 h-24 bg-muted rounded-full flex items-center justify-center mx-auto mb-6">
              <BookOpen className="w-12 h-12 text-muted-foreground" />
            </div>
            <h2 className="text-xl font-semibold text-foreground mb-2">No books found</h2>
            <p className="text-muted-foreground">Try different search terms or check your spelling.</p>
          </div>
        )}

        {books.length > 0 && (
          <>
            <div className="mb-6">
              <p className="text-muted-foreground">
                Found {books.length} books
              </p>
            </div>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-6 gap-4">
              {books.map((book) => (
                <BookCard key={book.key} book={book} />
              ))}
            </div>
          </>
        )}
      </main>
    </div>
  );
};

export default Index;