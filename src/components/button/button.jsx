import './button.css'

export const Button = ({ className, children, ...props }) => {
  return (
    <button className={`btn ${className}`} {...props}>
      {children}
    </button>
  )
}
