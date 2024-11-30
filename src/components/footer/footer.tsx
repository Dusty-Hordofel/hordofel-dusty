import React from "react";

const Footer = () => {
  return (
    <footer className="flex flex-col gap-2 sm:flex-row py-6 w-full shrink-0 items-center border-t">
      <p className="text-sm">
        © {new Date().getFullYear()} BAMANA Dusty Hordofel.
        {/* Tous droits
          réservés. */}
      </p>
      {/* <nav className="sm:ml-auto flex gap-4 sm:gap-6">
          <Link className="text-xs hover:underline underline-offset-4" href="#">
            Mentions légales
          </Link>
          <Link className="text-xs hover:underline underline-offset-4" href="#">
            Politique de confidentialité
          </Link>
        </nav> */}
    </footer>
  );
};

export default Footer;
