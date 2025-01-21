import React from "react";

const InfoSection = () => {
  return (
    <div className="max-w-screen-lg mx-auto px-4 mt-8">
    
      <section className="mb-12">
        <h2 className="text-2xl font-semibold mb-4">When to use</h2>
        <p className="text-gray-700">
          JSONPlaceholder is a free online REST API that you can use{" "}
          <span className="font-semibold">whenever you need some fake data.</span>{" "}
          It can be in a README on GitHub, for a demo on CodeSandbox, in code
          examples on Stack Overflow, ...or simply to test things locally.
        </p>
      </section>

      <section className="mb-12">
        <h2 className="text-2xl font-semibold mb-4">Resources</h2>
        <p className="text-gray-700 mb-6">
          JSONPlaceholder comes with a set of 6 common resources:
        </p>
        <ul className="space-y-2">
          <li>
            <a 
            target="blank"
            href="https://basit-placeholder-api.vercel.app/posts" className="text-blue-500 hover:underline">
              /posts
            </a>{" "}
            100 posts
          </li>
          <li>
            <a
            target="blank"
            href="https://basit-placeholder-api.vercel.app/comments" className="text-blue-500 hover:underline">
              /comments
            </a>{" "}
            500 comments
          </li>
          <li>
            <a
            target="blank"
            href="https://basit-placeholder-api.vercel.app/albums" className="text-blue-500 hover:underline">
              /albums
            </a>{" "}
            100 albums
          </li>
          <li>
            <a 
            target="blank"
            href="https://basit-placeholder-api.vercel.app/photos" className="text-blue-500 hover:underline">
              /photos
            </a>{" "}
            5000 photos
          </li>
          <li>
            <a 
            target="blank"
            href="https://basit-placeholder-api.vercel.app/todos" className="text-blue-500 hover:underline">
              /todos
            </a>{" "}
            200 todos
          </li>
          <li>
            <a 
            target="blank"
            href="https://basit-placeholder-api.vercel.app/users" className="text-blue-500 hover:underline">
              /users
            </a>{" "}
            10 users
          </li>
        </ul>
        <p className="text-gray-700 mt-6">
          <span className="font-semibold">Note:</span> resources have relations. For
          example: posts have many comments, albums have many photos, ... see{" "}
          <a
          target="blank"
            href="/guide"
            className="text-blue-500 hover:underline font-semibold"
          >
            guide
          </a>{" "}
          for the full list.
        </p>
      </section>

      <section>
        <h2 className="text-2xl font-semibold mb-4">Routes</h2>
        <p className="text-gray-700 mb-6">
          All HTTP methods are supported. You can use http or https for your
          requests.
        </p>
        <ul className="space-y-2">
          <li>GET <span className="text-gray-700">/posts</span></li>
          <li>GET <span className="text-gray-700">/posts/1</span></li>
          <li>GET <span className="text-gray-700">/posts/1/comments</span></li>
          <li>GET <span className="text-gray-700">/comments?postId=1</span></li>
          <li>POST <span className="text-gray-700">/posts</span></li>
          <li>PUT <span className="text-gray-700">/posts/1</span></li>
          <li>PATCH <span className="text-gray-700">/posts/1</span></li>
          <li>DELETE <span className="text-gray-700">/posts/1</span></li>
        </ul>
        <p className="text-gray-700 mt-6">
          <span className="font-semibold">Note:</span> see{" "}
          <a
            href="/guide"
            className="text-blue-500 hover:underline font-semibold"
          >
            guide
          </a>{" "}
          for usage examples.
        </p>
      </section>
    </div>
  );
};

export default InfoSection;
