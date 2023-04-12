import './App.css';
import * as React from 'react';

function App() {
  const [index, setIndex] = React.useState(0)
  const [slideImages] = React.useState(["nezuko1.jpeg", 'tanjirou.jpeg', 'zenitsu.jpeg'])

  const nextSlide = () => setIndex(current => current + 1 >= slideImages.length ? 0 : current + 1 )
  const prevSlide = () => setIndex(current => current -1 < 0 ? slideImages.length-1 : current - 1)

  React.useEffect(() => {
    const eventHandler = (event) => {
      if (event.code === 'ArrowRight') {
        nextSlide()
      } else if (event.code === 'ArrowLeft') {
        prevSlide()
      }
    }

    document.addEventListener('keydown', eventHandler)

    return () => {
      document.removeEventListener('keydown', eventHandler)
    }
  }, [])
  
    return (
        <div className="App">
            <div className="slideshow-container">
            {slideImages.map((imageSrc, imageIndex) => (
                <div className="mySlides fade" style={{display: index === imageIndex ? 'block' : 'none'}}>
                <div className="numbertext"> {imageIndex}/ {slideImages.length}</div>
                <img src={imageSrc} style={{width: "100%"}} alt={imageSrc}/>
                <div className="text">Caption Text</div>
            </div>
        
            ))}

                <button className="prev" onClick={nextSlide}>&#10094;</button>
                <button className="next" onClick={prevSlide}>&#10095;</button>
            </div>
            <br/>
            
            <div>
            {slideImages.map((_, imageIndex) => 
            <span key={_} className={`dot ${imageIndex === index ? 'active': ''}`} onClick={() => setIndex(imageIndex)}></span>
            )}
            </div>
        </div>
    );
  }
  
  export default App;