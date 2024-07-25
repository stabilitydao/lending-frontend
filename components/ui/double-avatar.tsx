import { Avatar, AvatarFallback, AvatarImage } from "./avatar";

export const DoubleAvatar = ({
  firstSrc,
  secondSrc,
  firstAlt,
  secondAlt,
}: {
  firstSrc: string;
  secondSrc: string;
  firstAlt: string;
  secondAlt: string;
}) => {
  return (
    <div className="relative -right-4 inline-flex ">
      <Avatar className="z-10 bg-background p-1.5 ">
        <AvatarImage src={firstSrc} alt={firstAlt} className="object-contain" />
        <AvatarFallback>{firstAlt?.charAt(0)}</AvatarFallback>
      </Avatar>
      <Avatar className="absolute -left-7 bg-background p-1.5">
        <AvatarImage
          src={secondSrc}
          alt={secondAlt}
          className="object-contain"
        />
        <AvatarFallback>{secondAlt?.charAt(0)}</AvatarFallback>
      </Avatar>
    </div>
  );
};
