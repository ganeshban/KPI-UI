function Footer() {
  return (
    <>
      <footer className="bg-dark text-light py-5">
        <div className="container text-center">
          <h3>Contact Us</h3>
          <p>Email: banganesh98@gmail.com</p>
          <p>Phone: +1 (720) 751 - 9966</p>
        </div>

        <div className="mt-4 text-center">
          <p>cIT &copy; {new Date().getFullYear()}. All rights reserved.</p>
        </div>
      </footer>
    </>
  );
}

export default Footer;
