// import react from 'react';
// import { Heart, Github } from 'lucide-react';

// function App() {
//   return (
//     <div className="min-h-screen flex flex-col">
//       {/* Header */}
//       <div className="bg-gradient-to-r from-blue-500 to-blue-600 py-2">
//         <div className="container mx-auto text-center">
//           <a href="#" className="text-sm text-white hover:underline">
//             Check my new project, MistCSS write React components with 50% less code
//           </a>
//         </div>
//       </div>

//       {/* Hero Section */}
//       <div className="bg-gradient-to-b from-gray-50 to-white py-16">
//         <div className="container mx-auto px-4 text-center">
//           <h1 className="text-5xl font-bold text-gray-800 mb-4">{'{JSON}'} Placeholder</h1>
//           <p className="text-xl text-gray-600 mb-4">
//             Free fake and reliable API for testing and prototyping.
//           </p>
//           <p className="text-blue-500 mb-4">
//             Powered by <a href="#" className="hover:underline">JSON Server</a> + <a href="#" className="hover:underline">LowDB</a>
//           </p>
//           <p className="text-sm text-gray-500">Serving ~3 billion requests each month.</p>
//         </div>
//       </div>

//       {/* Sponsors Section */}
//       <section className="py-12 bg-white">
//         <div className="container mx-auto px-4">
//           <h2 className="text-2xl font-bold text-center mb-8">Sponsors</h2>
//           <div className="flex justify-center gap-8 flex-wrap">
//             <a href="#" className="block">
//               <img src="https://images.unsplash.com/photo-1614680376593-902f74cf0d41?w=200&h=100&fit=crop" 
//                    alt="Sponsor 1" 
//                    className="h-12 object-contain" />
//             </a>
//             <a href="#" className="block">
//               <img src="https://images.unsplash.com/photo-1614680376408-12c8c384c640?w=200&h=100&fit=crop" 
//                    alt="Sponsor 2" 
//                    className="h-12 object-contain" />
//             </a>
//           </div>
//         </div>
//       </section>

//       {/* Try It Section */}
//       <section className="py-12 bg-gray-50">
//         <div className="container mx-auto px-4">
//           <h2 className="text-2xl font-bold text-center mb-8">Try it</h2>
//           <div className="max-w-2xl mx-auto">
//             <pre className="bg-gray-900 text-white p-6 rounded-lg mb-4 font-mono text-sm">
//               {`fetch('https://jsonplaceholder.typicode.com/todos/1')
//   .then(response => response.json())
//   .then(json => console.log(json))`}
//             </pre>
//             <button className="bg-blue-500 text-white px-6 py-2 rounded-lg hover:bg-blue-600 transition">
//               Run script
//             </button>
//           </div>
//         </div>
//       </section>

//       {/* Resources Section */}
//       <section className="py-12 bg-white">
//         <div className="container mx-auto px-4">
//           <h2 className="text-2xl font-bold mb-8">Resources</h2>
//           <div className="max-w-2xl mx-auto">
//             <table className="w-full">
//               <tbody>
//                 {[
//                   ['/posts', '100 posts'],
//                   ['/comments', '500 comments'],
//                   ['/albums', '100 albums'],
//                   ['/photos', '5000 photos'],
//                   ['/todos', '200 todos'],
//                   ['/users', '10 users'],
//                 ].map(([route, desc]) => (
//                   <tr key={route} className="border-b">
//                     <td className="py-2 font-mono text-blue-500">{route}</td>
//                     <td className="py-2 text-gray-600">{desc}</td>
//                   </tr>
//                 ))}
//               </tbody>
//             </table>
//           </div>
//         </div>
//       </section>

//       {/* Routes Section */}
//       <section className="py-12 bg-gray-50">
//         <div className="container mx-auto px-4">
//           <h2 className="text-2xl font-bold mb-8">Routes</h2>
//           <div className="max-w-2xl mx-auto space-y-2">
//             {[
//               'GET    /posts',
//               'GET    /posts/1',
//               'POST   /posts',
//               'PUT    /posts/1',
//               'PATCH  /posts/1',
//               'DELETE /posts/1',
//             ].map((route) => (
//               <div key={route} className="bg-gray-100 p-2 rounded font-mono text-sm">
//                 {route}
//               </div>
//             ))}
//           </div>
//         </div>
//       </section>

//       {/* Footer */}
//       <footer className="py-12 bg-white">
//         <div className="container mx-auto px-4 text-center">
//           <h2 className="text-2xl font-bold mb-4">Use your own data</h2>
//           <p className="mb-8 text-gray-600">
//             Create your own REST API in seconds with our tools.
//           </p>
//           <div className="flex items-center justify-center gap-2 text-gray-500">
//             <a href="https://github.com" className="hover:text-gray-700">
//               <Github className="inline-block w-5 h-5" />
//             </a>
//             <Heart className="w-4 h-4 text-red-500" />
//             <span>© 2024</span>
//           </div>
//         </div>
//       </footer>
//     </div>
//   );
// }

// export default App;












import React from 'react';
import Header from './components/Header';
import Sponsors from './components/Sponsors';
import TryIt from './components/TryIt';
import InfoSection from './components/InfoSection';
import Footer from './components/Footer';

function App() {
  return (
    <div className="font-sans">
      <Header />
      <main className="max-w-4xl mx-auto p-4">
        <h1 className="text-5xl font-bold text-center my-8">{'{JSON} Placeholder'}</h1>
        <p className="text-center text-lg mb-8">
          Free fake and reliable API for testing and prototyping.
          <br />
          Powered by <a href="#" className="text-blue-500 underline">JSON Server</a> + <a href="#" className="text-blue-500 underline">LowDB</a>.
        </p>
        <p className="text-center text-gray-500 mb-8">Serving ~3 billion requests each month.</p>
        <Sponsors />
        <TryIt />
        <InfoSection />
      </main>
      <Footer />
    </div>
  );
}

export default App;
