import Image from "next/image";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import Link from "next/link";
import { navLinks, socialLinks } from "@/lib/constants";

export const Footer = () => {
  return (
    <footer>
      <div className="flex flex-col lg:flex-row items-center h-fit z-50 justify-between shadow-inner gap-10 bg-background w-full py-12 px-10 relative">
        <div>
          <Link href="/" className="flex gap-[5px] items-center">
            <Image
              src="/full_logo_dark.png"
              alt="logo"
              width={150}
              height={78}
            />
          </Link>
        </div>
        {/* <Link href="/">
          <Image src="/logo.png" alt="Llama icon" width={300} height={300} />
        </Link> */}
        <div className="flex flex-row lg:flex-col items-start gap-4">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="text-white text-xs md:text-base"
            >
              {link.label}
            </Link>
          ))}
        </div>
        <div className="flex flex-row space-x-4">
          {socialLinks.map((link, index) => (
            <Link
              key={index}
              href={link.url}
              target="_blank"
              rel="noopener noreferrer"
            >
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
      </div>
    </footer>
  );
};
