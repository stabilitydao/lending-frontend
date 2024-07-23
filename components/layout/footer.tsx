import Image from "next/image";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import Link from "next/link";
import { navLinks, socialLinks } from "@/lib/constants";

export const Footer = () => {
  return (
    <footer className="flex flex-col lg:flex-row items-center z-50 justify-between shadow-inner gap-10 bg-background w-full py-24 px-10 relative">
      <div>
        <Image src="/logo.png" alt="Llama icon" width={300} height={300} />
      </div>
      <div className="flex flex-row lg:flex-col items-start gap-4">
        {navLinks.map((link) => (
          <Link
            key={link.href}
            href={link.href}
            className="text-primary text-xs md:text-base"
          >
            {link.label}
          </Link>
        ))}
      </div>
      <div className="flex flex-row space-x-4">
        {socialLinks.map((link, index) => (
          <Link key={index} href={link.url}>
            <Avatar className="bg-primary flex items-center justify-center">
              <AvatarImage
                src={link.imageSrc}
                className="w-5 h-5 object-contain"
              />
              <AvatarFallback className="text-xs">
                {link.imageSrc}
              </AvatarFallback>
            </Avatar>
          </Link>
        ))}
      </div>
    </footer>
  );
};
