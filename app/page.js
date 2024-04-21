export default function Home() {
  return (
    <div>
      <h1>Next.js Rendering process</h1>
      <div className="mt-4">
        Rendering converts the code you write into user interfaces. React and
        Next.js allow you to create hybrid web applications where parts of your
        code can be rendered on the server or the client. This section will help
        you understand the differences between these rendering environments,
        strategies, and runtimes.
      </div>{" "}
      <br />
      <div>
        There are two environments where web applications can be rendered:{" "}
        <strong className="text-blue-400 ">the client and the server.</strong>
      </div>
      <li>○ (Static) prerendered as static content</li>
      <li>● (SSG) prerendered as static HTML (uses getStaticProps)</li>
      <li>ƒ (Dynamic) server-rendered on demand</li>
    </div>
  );
}
