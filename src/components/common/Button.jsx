// src/components/common/Button.jsx
import { Link } from 'react-router-dom';

const Button = ({ 
  children,
  to, 
  href,
  onClick,
  type = 'button',
  variant = 'primary',
  size = 'medium',
  className = '',
  disabled = false,
  fullWidth = false,
  ...rest
}) => {
  // Define button styles based on variant and size
  const baseStyle = "font-medium rounded-md transition-all duration-300 flex items-center justify-center";
  
  const variantStyles = {
    primary: "bg-safari-green text-white hover:bg-safari-green/90",
    secondary: "bg-earth-brown text-beige hover:bg-earth-brown/90",
    outlined: "bg-transparent border-2 border-safari-green text-safari-green hover:bg-safari-green/10",
    gold: "bg-safari-gold text-earth-brown hover:bg-safari-gold/90"
  };
  
  const sizeStyles = {
    small: "text-sm px-4 py-2",
    medium: "px-6 py-3",
    large: "text-lg px-8 py-4"
  };
  
  const widthStyle = fullWidth ? "w-full" : "";
  const disabledStyle = disabled ? "opacity-50 cursor-not-allowed" : "cursor-pointer";
  
  const buttonStyle = `${baseStyle} ${variantStyles[variant]} ${sizeStyles[size]} ${widthStyle} ${disabledStyle} ${className}`;
  
  // Render the appropriate element based on props
  if (to) {
    return (
      <Link to={to} className={buttonStyle} {...rest}>
        {children}
      </Link>
    );
  }
  
  if (href) {
    return (
      <a href={href} className={buttonStyle} target="_blank" rel="noopener noreferrer" {...rest}>
        {children}
      </a>
    );
  }
  
  return (
    <button
      type={type}
      className={buttonStyle}
      onClick={onClick}
      disabled={disabled}
      {...rest}
    >
      {children}
    </button>
  );
};

export default Button;