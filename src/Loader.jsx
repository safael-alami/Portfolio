// import React, { useState, useEffect } from 'react';
// import './Loader.css';

// const Loader = () => {
//   const [percentage, setPercentage] = useState(0);
//   const [loadingComplete, setLoadingComplete] = useState(false);

//   useEffect(() => {
//     const interval = setInterval(() => {
//       setPercentage((prev) => {
//         if (prev < 100) {
//           return prev + 1;
//         } else {
//           clearInterval(interval);
//           return prev;
//         }
//       });
//     }, 100);

//     return () => clearInterval(interval);
//   }, []);

//   useEffect(() => {
//     if (percentage === 100) {
//       setLoadingComplete(true); 
//     }
//   }, [percentage]);

//   return (
//     <div className="loader-container">
//       {!loadingComplete ? (
//         <>
//           <div className="spinner"></div>
//           <p className="pourcentage">{percentage}%</p>
//         </>
//       ) : (
//         <p className="loading-complete">Chargement terminé ! 🎉</p>
//       )}
//     </div>
//   );
// };

// export default Loader;
