import './App.css';
import CircularGallery from './CircularGallery';

function App() {
  // Images from public folder
  const galleryItems = [
    { image: '/P22.jpg', text: 'Image 1' },
    { image: '/P23.jpg', text: 'Image 2' },
    { image: '/P25.jpg', text: 'Image 3' },
    { image: '/P34.jpg', text: 'Image 4' },
    { image: '/P38.jpg', text: 'Image 5' },
    { image: '/P44.jpg', text: 'Image 6' },
    { image: '/P8.jpg', text: 'Image 7' }
  ];

  return (
    <div className="App">
      <div style={{ height: '100vh', position: 'relative' }}>
        <CircularGallery 
          items={galleryItems}
          bend={3} 
          textColor="#ffffff" 
          borderRadius={0.05} 
          scrollEase={0.02}
        />
      </div>
    </div>
  );
}

export default App;
