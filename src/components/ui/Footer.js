import React from 'react'

export const Footer = () => {
  return (
    <div className="p-1 bg-dark text-white text-center">
      <div className="container">
        <p className="lead pt-3">
          Copyright &copy; 2022 - Developed by:{' '}
          <a
            href="https://nelsoncadenas.netlify.app/"
            rel="noopener noreferrer"
            className="text-primary text-decoration-none fw-bold"
            target="_blank"
          >
            Nelson Cadenas
          </a>
        </p>
      </div>
    </div>
  )
}
