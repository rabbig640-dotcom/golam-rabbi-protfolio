import React from 'react'

const Button = ({ClassName,size="default",children,...props}) => {
  const baseClasses="relative overrflow-hidden rounded-full font-medium focus:outline-none focus-visible:ring-2 focus-visible:ring-primary bg-primary text-primary-foreground hover:bg-primary/90 shadow-lg shadow-primary/25";
  const sizeClasses={
    sm:"px-4 py-2 test-sm",
    default:"px-6 py-3 text-base",
    lg:"px-8 py-4 text-lg"
  }
  const classes=`${baseClasses} ${sizeClasses[size]} ${ClassName} `;
  return (
    <button className={classes}>
        <span className='relative items-center justify-center gap-2'>
          {children}
        </span>
    </button>
  )
}

export default Button;