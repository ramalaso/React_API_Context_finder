function Footer() {
   const footYear = new Date().getFullYear()
   return (
      <footer className="footer p-10 bg-gray-700 text-primary-content footer-center">
         <p>Copyright &copy; {footYear}</p>
      </footer>
   )
}

export default Footer
