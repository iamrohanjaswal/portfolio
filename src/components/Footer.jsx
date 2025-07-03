import React from 'react'

const Footer = () => {
  return (
    <div>
      <footer className="bg-primary text-black py-3 mt-10">
      <div className="max-w-6xl mx-auto px-4 text-center text-sm">
      Made with ❤️ by Rohan Jaswal
      © {new Date().getFullYear()}.
      </div>
    </footer>
    </div>
  )
}

export default Footer
