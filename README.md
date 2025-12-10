# Circular Gallery

A smooth, interactive circular gallery component with WebGL rendering using React and OGL.

## Features

✨ **Circular Gallery Effect** - Images arranged in a circular layout that bends based on scroll position
🎨 **WebGL Rendering** - High-performance rendering with OGL library
🖱️ **Smooth Interactions** - Support for mouse wheel, drag, and touch gestures
📱 **Responsive** - Works seamlessly on desktop and mobile devices
🎯 **Infinite Scroll** - Seamlessly loops through gallery items
🔧 **Customizable** - Easy-to-use props for customization

## Installation

```bash
pnpm install
```

## Usage

```jsx
import CircularGallery from './CircularGallery'

function App() {
  const galleryItems = [
    { image: '/image1.jpg', text: 'Image 1' },
    { image: '/image2.jpg', text: 'Image 2' },
    // ... more items
  ];

  return (
    <div style={{ height: '100vh' }}>
      <CircularGallery 
        items={galleryItems}
        bend={3} 
        textColor="#ffffff" 
        borderRadius={0.05} 
        scrollEase={0.02}
      />
    </div>
  );
}

export default App;
```

## Props

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `items` | Array | Default images | Array of objects with `image` (path) and `text` (label) properties |
| `bend` | Number | 3 | Circular bend intensity (0 = flat, higher = more curved) |
| `textColor` | String | '#ffffff' | Color of the image labels |
| `borderRadius` | Number | 0.05 | Border radius for images (0-1 scale) |
| `font` | String | 'bold 30px Figtree' | Font for image labels |
| `scrollSpeed` | Number | 2 | Scroll sensitivity |
| `scrollEase` | Number | 0.05 | Easing factor for smooth scrolling (lower = smoother) |

## Development

Start the development server:

```bash
pnpm start
```

The app will run at `http://localhost:3000`

## Build

Create a production build:

```bash
pnpm build
```

## Project Structure

```
src/
├── App.jsx                 # Main app component
├── App.css                 # App styles
├── CircularGallery.jsx     # Gallery component
├── CircularGallery.css     # Gallery styles
├── index.js                # React entry point
└── index.css               # Global styles

public/
├── index.html              # HTML template
└── *.jpg                   # Gallery images
```

## Technologies

- **React** - UI framework
- **OGL** - WebGL rendering library
- **CSS** - Styling

## License

MIT
