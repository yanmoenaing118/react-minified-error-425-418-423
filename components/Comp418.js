"use client";


function Comp418() {
  // THIS IS THE PROBLEM:
  // On the server, `window` is undefined, so this condition is false.
  // On the client, `window` exists, so this condition might be true.
  // This results in different HTML being generated on the server vs. the client.

  if (typeof window !== "undefined" && window.innerWidth < 768) {
    // The client might render this on a small screen
    return (
      <nav>
        <p>This is the mobile navigation.</p>
      </nav>
    );
  }

  // The server will ALWAYS render this
  return (
    <header>
      <h1>This is the desktop header.</h1>
    </header>
  );
}

export default Comp418;