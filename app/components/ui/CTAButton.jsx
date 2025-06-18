// components/CTAButton.jsx

export default function CTAButton({
  text = "Click Me",
 
  onClick,
  bgColor = "bg-black",
  textColor = "text-white",
  padding = "px-6 py-2",
  rounded = "rounded-md",
  hoverBgColor = "hover:bg-orange-600",
  className = "",

}) {
  return (
    <button 
      onClick={onClick}
      className={`${bgColor} ${textColor} ${padding} ${rounded} ${hoverBgColor} transition-all duration-300 cursor-pointer ${className}`}
    >
      {text}
    </button>
  );
}
