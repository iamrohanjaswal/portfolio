import React from 'react'

const Footer = () => {
  return (
    <div>
      <footer className="bg-primary text-black py-3 mt-10">
      <div className="max-w-6xl mx-auto px-4 text-center text-sm">
        © {new Date().getFullYear()} Rohan Jaswal. All rights reserved.
      </div>
    </footer>
    </div>
  )
}

export default Footer
