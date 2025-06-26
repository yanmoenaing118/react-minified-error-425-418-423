"use client";

const Comp425 = () => {
  // This `new Date()` call executes on the server during SSR.
  // It will execute again on the client during hydration.
  // Even a millisecond difference in execution time, or locale differences,
  // will cause the string representation to mismatch.
  const currentDateTime = new Date();
  const formattedDate = currentDateTime.toLocaleDateString('en-US', {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
    hour: 'numeric',
    minute: 'numeric',
    second: 'numeric', // Including seconds significantly increases mismatch probability
    fractionalSecondDigits: 3 // Even more granular for stricter testing
  });

  return (
    <div>
      <p>Current Server/Client Time: {formattedDate}</p>
    </div>
  );
};

export default Comp425;