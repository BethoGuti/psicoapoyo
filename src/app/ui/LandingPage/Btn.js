export const Btn = ({ text, bgColor, textColor }) => {
  return (
    <button
      className="rounded-lg px-5 py-2 font-black my-1"
      style={{ backgroundColor: bgColor, color: textColor }}
    >
      {text}
    </button>
  );
};
