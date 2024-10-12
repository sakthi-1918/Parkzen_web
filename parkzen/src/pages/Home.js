// import React from 'react';
// import Navibar from '../components/Navigationbar';
// import backgroundImage from '../assets/parkingLot.jpeg'; // Import the image

// function Home() {
//   const divStyle = {
//     backgroundImage: `url(${backgroundImage})`,
//     backgroundSize: 'cover', // Cover the entire div
//     backgroundPosition: 'center', // Center the image
//     height: '100vh', // Full viewport height
//     width: '100vw', // Full viewport width
//     overflow: 'hidden', // Optional: to prevent scrolling bars
    
//   };

//   return (
//     <div style={divStyle}>
//       <Navibar />
//       {/* Add any additional content here */}
//     </div>
//   );
// }

// export default Home;
// import React from 'react';
// import Navibar from '../components/Navigationbar';
// import backgroundImage from '../assets/imageparkk.png'; // Import the image

// function Home() {
//   const divStyle = {
//     backgroundImage: `url(${backgroundImage})`,
//     backgroundSize: 'cover', // Cover the entire div
//     backgroundPosition: 'center', // Center the image
//     height: '100vh', // Full viewport height
//     width: '100vw', // Full viewport width
//     overflow: 'hidden', // Optional: to prevent scrolling bars
//     position: 'relative', // Position for overlay positioning
//   };

//   const overlayStyle = {
//     position: 'absolute',
//     top: 0,
//     left: 0,
//     width: '100%',
//     height: '100%',
//     backgroundColor: 'rgba(0, 0, 0, 0.5)', // Dark overlay with some transparency
//     display: 'flex',
//     alignItems: 'center',
//     justifyContent: 'center',
//     color: 'white',
//     textAlign: 'center',
//     zIndex: 1,
//   };

//   const headingStyle = {
//     fontSize: '4rem',
//     fontWeight: 'bold',
//     margin: '0',
//     animation: 'fadeInUp 3s ease-out',
//     // Add more styling as needed
//   };

//   return (
//     <div style={divStyle}>
//       <Navibar />
//       <div style={overlayStyle}>
//         <div>
//           <h1 style={headingStyle}>Welcome to ParkZen</h1>
//           {/* Add more text or content here */}
//         </div>
//       </div>
//       <style>
//         {`
//           @keyframes fadeInUp {
//             0% {
//               opacity: 0;
//               transform: translateY(30px);
//             }
//             100% {
//               opacity: 1;
//               transform: translateY(0);
//             }
//           }
//         `}
//       </style>
//     </div>
//   );
// }

// export default Home;
// import React from 'react';
// import Navibar from '../components/Navigationbar';
// import backgroundImage from '../assets/imageparkk.png'; // Import the image

// function Home() {
//   const divStyle = {
//     backgroundImage: `url(${backgroundImage})`,
//     backgroundSize: 'cover', // Cover the entire div
//     backgroundPosition: 'center', // Center the image
//     height: '100vh', // Full viewport height
//     width: '100vw', // Full viewport width
//     overflow: 'hidden', // Optional: to prevent scrolling bars
//     position: 'relative', // Position for overlay positioning
//   };

//   const overlayStyle = {
//     position: 'absolute',
//     top: 0,
//     left: 0,
//     width: '100%',
//     height: '100%',
//     backgroundColor: 'rgba(0, 0, 0, 0.5)', // Dark overlay with some transparency
//     display: 'flex',
//     alignItems: 'center',
//     justifyContent: 'center',
//     color: 'white',
//     textAlign: 'center',
//     zIndex: 1,
//     flexDirection: 'column', // Align items in a column
//   };

//   const headingStyle = {
//     fontSize: '4rem',
//     fontWeight: 'bold',
//     margin: '0',
//     animation: 'fadeInUp 3s ease-out',
//   };

//   const descriptionStyle = {
//     fontSize: '1.5rem',
//     margin: '20px 0 0 0',
//     animation: 'fadeInUp 3s ease-out 1s', // Delay to start after heading animation
//     opacity: 1,
//     transform: 'translateY(0)',
//     maxWidth: '1000px',
    
//   };

//   return (
//     <div style={divStyle}>
//       <Navibar />
//       <div style={overlayStyle}>
//         <div>
//           <h1 style={headingStyle}>Welcome to Our Parking Lot</h1>
//           <p style={descriptionStyle}>
//             Discover the best parking solutions with ease and convenience. Our parking lot is equipped with modern amenities to ensure a seamless experience for all users. Safe, secure, and always available.
//           </p>
//         </div>
//       </div>
//       <style>
//         {`
//           @keyframes fadeInUp {
//             0% {
//               opacity: 0;
//               transform: translateY(30px);
//             }
//             100% {
//               opacity: 1;
//               transform: translateY(0);
//             }
//           }
//         `}
//       </style>
//     </div>
//   );
// }

// export default Home;
import React, { useEffect, useState } from 'react';
import Navibar from '../components/Navigationbar';
import backgroundImage from '../assets/imageparkk.png'; // Import the image

function Home() {
  const [isDescriptionVisible, setIsDescriptionVisible] = useState(false);

  useEffect(() => {
    // Set a timer to update the state after the heading animation completes
    const timer = setTimeout(() => {
      setIsDescriptionVisible(true);
    }, 3000); // This should match the duration of the heading animation

    return () => clearTimeout(timer); // Clean up timer on component unmount
  }, []);

  const divStyle = {
    backgroundImage: `url(${backgroundImage})`,
    backgroundSize: 'cover', // Cover the entire div
    backgroundPosition: 'center', // Center the image
    height: '100vh', // Full viewport height
    width: '100vw', // Full viewport width
    overflow: 'hidden', // Optional: to prevent scrolling bars
    position: 'relative', // Position for overlay positioning
  };

  const overlayStyle = {
    position: 'absolute',
    top: 0,
    left: 0,
    width: '100%',
    height: '100%',
    backgroundColor: 'rgba(0, 0, 0, 0.5)', // Dark overlay with some transparency
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    color: 'white',
    textAlign: 'center',
    zIndex: 1,
  };

  const contentStyle = {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    maxWidth: '80%', // Optional: Limit the width of the content
  };

  const headingStyle = {
    fontSize: '4rem',
    fontWeight: 'bold',
    margin: '0',
    animation: 'fadeInUp 3s ease-out',
  };

  const descriptionStyle = {
    fontSize: '1.5rem',
    margin: '20px 0 0 0',
    opacity: isDescriptionVisible ? 1 : 0, // Fade in after heading animation
    transform: isDescriptionVisible ? 'translateY(0)' : 'translateY(20px)', // Ensure description moves into place
    transition: 'opacity 1s ease-out, transform 1s ease-out',
    maxWidth: '1000px', // Optional: Set a maximum width for the description
  };

  return (
    <div style={divStyle}>
      <Navibar />
      <div style={overlayStyle}>
        <div style={contentStyle}>
          <h1 style={headingStyle}>Welcome to ParkZen</h1>
          <p style={descriptionStyle}>
          Seamless QR entry, live slot updates, and versatile campus parking solutions. Your smart parking partner for a hassle-free experience.

          </p>
        </div>
      </div>
      <style>
        {`
          @keyframes fadeInUp {
            0% {
              opacity: 0;
              transform: translateY(30px);
            }
            100% {
              opacity: 1;
              transform: translateY(0);
            }
          }
        `}
      </style>
    </div>
  );
}

export default Home;
