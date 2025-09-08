# BookFinder 📚

A beautiful, responsive book discovery application that helps you find your next great read from millions of books in the Open Library.

![BookFinder Preview](https://via.placeholder.com/800x400/1e3a8a/ffffff?text=BookFinder+App+Preview)

## ✨ Features

- **Smart Search**: Search books by title, author, or subject
- **Rich Book Details**: View comprehensive information including publication year, publishers, subjects, and languages
- **Beautiful Cover Art**: High-quality book covers with elegant fallbacks
- **Responsive Design**: Optimized for desktop, tablet, and mobile devices
- **Real-time Results**: Instant search results as you type
- **Detailed Book Modal**: Click any book to see full details in an immersive modal
- **Loading States**: Smooth loading animations and user feedback
- **Error Handling**: Graceful error handling with helpful messages

## 🛠️ Tech Stack

- **Frontend**: React 18 with TypeScript
- **Styling**: Tailwind CSS with custom design system
- **UI Components**: shadcn/ui component library
- **Icons**: Lucide React
- **Build Tool**: Vite
- **API**: Open Library Search API
- **State Management**: React Hooks
- **Routing**: React Router DOM

## 🚀 Getting Started

### Prerequisites

- Node.js (v16 or higher)
- npm or yarn

### Installation

1. Clone the repository:
```bash
git clone <your-repo-url>
cd bookfinder
```

2. Install dependencies:
```bash
npm install
```

3. Start the development server:
```bash
npm run dev
```

4. Open your browser and navigate to `http://localhost:5173`

## 📖 Usage

1. **Search for Books**: Enter a book title, author name, or subject in the search bar
2. **Browse Results**: Scroll through the grid of book results
3. **View Details**: Click on any book card to open a detailed modal with comprehensive information
4. **Explore**: Use the modal navigation to browse through search results

## 🎨 Design System

The application features a carefully crafted design system with:

- **Color Palette**: Deep blues, warm creams, and golden accents inspired by academic libraries
- **Typography**: Clean, readable fonts optimized for content consumption
- **Animations**: Smooth transitions and hover effects
- **Responsive Grid**: Adaptive layout that works on all screen sizes
- **Semantic Tokens**: Consistent theming using CSS custom properties

## 🔧 API Integration

BookFinder uses the [Open Library Search API](https://openlibrary.org/dev/docs/api/search) to fetch book data:

- **Endpoint**: `https://openlibrary.org/search.json`
- **Parameters**: Title-based search with configurable limits
- **Data**: Comprehensive book metadata including covers, authors, publishers, and subjects

## 📱 Responsive Design

The application is fully responsive and optimized for:

- **Desktop**: Full-featured experience with 6-column grid
- **Tablet**: 3-4 column adaptive layout
- **Mobile**: Single-column layout with touch-optimized interactions

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add some amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## 📝 License

This project is open source and available under the [MIT License](LICENSE).

## 🙏 Acknowledgments

- [Open Library](https://openlibrary.org/) for providing the comprehensive book database
- [shadcn/ui](https://ui.shadcn.com/) for the beautiful UI components
- [Lucide](https://lucide.dev/) for the elegant icons
- [Tailwind CSS](https://tailwindcss.com/) for the utility-first styling approach

## 📧 Contact

If you have any questions or suggestions, feel free to reach out or open an issue on GitHub.

---

**Happy Reading!** 📖✨