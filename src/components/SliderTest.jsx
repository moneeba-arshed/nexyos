import React from 'react';

const SliderTest = () => {
  
const coffeeImages = [
  'https://static.vecteezy.com/system/resources/thumbnails/025/282/026/small/stock-of-mix-a-cup-coffee-latte-more-motive-top-view-foodgraphy-generative-ai-photo.jpg',
  'https://static.vecteezy.com/system/resources/thumbnails/023/513/862/small_2x/hot-coffee-cup-with-coffee-beans-wallpaper-coffee-photo.jpg',
  'https://corkframes.com/cdn/shop/articles/Corkframes_Coffee_Guide_520x500_422ebe38-4cfa-42b5-a266-b9bfecabaf30.jpg?v=1734598727',
  'https://www.shutterstock.com/shutterstock/photos/2500190129/display_1500/stock-photo-coffee-mug-and-grinded-coffee-beans-concept-photography-isolated-on-white-background-2500190129.jpg',
  'https://www.uclahealth.org/sites/default/files/styles/landscape_16x9_030000_1200x675/public/images/c8/green-cup-and-mushrooms.jpg?f=5dc6346c&itok=XDaPx2MN',
];
  return (
    <div className="relative d-flex items-center justify-content-center min-h-screen">
      {/* Image Column */}
      <div className="w-full col-5 ">
        <img
          src="https://t4.ftcdn.net/jpg/01/16/61/93/360_F_116619399_YA611bKNOW35ffK0OiyuaOcjAgXgKBui.jpg"
          alt="Placeholder"
          className="w-full h-auto rounded-0"
        />
      </div>
 {/* Vertical Circles in the Center */}
      <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 flex flex-col gap-4 z-10">
        {coffeeImages.map((img, index) => (
          <div
            key={index}
            className={` rounded-full overflow-hidden border-4 ${
              index === 0 ? 'border-white' : 'border-transparent'
            }`}
            style={{width:'60%'}}
          >
            <img src={img} alt={`coffee-${index}`} className="object-cover rounded-full w-68 h-28"/>
          </div>
        ))}
      </div>
      {/* Text Column */}
      <div className="w-full col-5 p-4">
        
    <div className="d-flex align-items-center">
      <div className="position-relative" style={{ width: '64px', height: '64px' }}>
        {/* Diagonal Line */}
        <div
          style={{
            position: 'absolute',
            top: '50%',
            left: '50%',
            width: '100%',
            borderTop: '2px solid #c69c6d',
            transform: 'translate(-50%, -50%) rotate(45deg)',
          }}
        ></div>

        {/* Top Number */}
        <div
          style={{
            position: 'absolute',
            top: '25%',
            left: '50%',
            transform: 'translate(-50%, -50%)',
            fontSize: '0.875rem', // equivalent to text-sm
            color: 'black',
          }}
        >
          02
        </div>

        {/* Bottom Number */}
        <div
          style={{
            position: 'absolute',
            bottom: '25%',
            left: '50%',
            transform: 'translate(-50%, 50%)',
            fontSize: '0.875rem',
            color: 'black',
          }}
        >
          05
        </div>
      </div>
    </div>
    <h2 className='justify-contents-start text-start '>Latte</h2>
      </div>
    </div>
  );
};

export default SliderTest;
