import Image from "next/image";
import Link from "next/link";
import { navLinks, socialLinks } from "@/lib/constants";

export const Footer = () => {
  return (
    <footer className="flex flex-col lg:flex-row items-center z-50 justify-between shadow-inner gap-10 bg-background w-full py-24 px-10 relative">
      <div>
        <Image src="/logo.png" alt="Llama icon" width={300} height={300} />
      </div>
      <div className="flex flex-col items-start space-y-4">
        {navLinks.map((link) => (
          <Link key={link.href} href={link.href} className="text-primary">
            {link.label}
          </Link>
        ))}
      </div>
      <div className="flex flex-row space-x-4">
        {socialLinks.map((link, index) => (
          <Link
            key={index}
            href={link.url}
            className="rounded-full px-4 bg-primary p-2"
          >
            <Image
              src={link.imageSrc}
              alt="Social icon"
              width={24}
              height={24}
            />
          </Link>
        ))}
      </div>
    </footer>
  );
};
