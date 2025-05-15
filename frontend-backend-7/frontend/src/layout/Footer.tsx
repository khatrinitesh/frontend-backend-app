import React from 'react';

const Footer:React.FC = () => {
    const currentFullYear = new Date().getFullYear();
  return (
    <>
      <footer className="footer">
        <div className="cointainer mx-auto">
            <p>&copy; copyright {currentFullYear}</p>
        </div>
      </footer>
    </>
  );
}

export default Footer;
