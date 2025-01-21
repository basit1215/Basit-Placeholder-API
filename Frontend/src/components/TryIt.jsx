import React, { useState } from 'react';

const TryIt = () => {
  const [data, setData] = useState(null);

  const fetchData = async () => {
    try {
      const response = await fetch('https://jsonplaceholder.typicode.com/todos/1');
      const json = await response.json();
      setData(json);
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  };

  return (
    <section className="my-12">
      <h2 className="text-2xl font-semibold mb-4 text-center">Try it</h2>
      <p className="text-center mb-4">
        Run this code here, in a console or from any site:
      </p>
      <div className="bg-gray-800 text-white p-4 rounded-lg shadow-md">
        <code className="block whitespace-pre text-sm">
          fetch('https://jsonplaceholder.typicode.com/todos/1'){'\n'}
          .then(response =&gt; response.json()){'\n'}
          .then(json =&gt; console.log(json))
        </code>
      </div>
      <button
        className="mt-4 bg-black text-white px-4 py-2 rounded-lg hover:bg-gray-900"
        onClick={fetchData}
      >
        Run script
      </button>
      <div className="mt-6 bg-gray-800 text-white p-4 rounded-lg shadow-md">
        <pre className="text-sm">
          {data
            ? JSON.stringify(data, null, 2)
            : '{\n  // Your output will appear here\n}'}
        </pre>
      </div>
      {data && (
        <p className="text-center text-green-500 mt-4">
          Congrats! You've made your first call to JSONPlaceholder. 🎉
        </p>
      )}
    </section>
  );
};

export default TryIt;
