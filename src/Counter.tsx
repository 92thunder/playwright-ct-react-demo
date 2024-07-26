import { type FC, useState } from "react";

export const Counter: FC = () => {
  const [count, setCount] = useState(0);

  return (
    <button
      onClick={() => setCount((count) => count + 1)}
      aria-label="count up button"
      type="button"
    >
      count is {count}
    </button>
  );
};
