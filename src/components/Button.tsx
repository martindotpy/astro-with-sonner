import { toast } from "sonner";

export function Button() {
  const handleClick = () => {
    toast.success("Button clicked!");
  };

  return (
    <button
      onClick={handleClick}
      style={{
        cursor: "pointer",
      }}
    >
      Click me
    </button>
  );
}
