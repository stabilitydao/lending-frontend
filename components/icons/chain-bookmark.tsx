import Image from "next/image";

export const ChainBookmark = ({ src }: { src: string }) => {
  return (
    <div className="w-8 h-8 shadow-md bg-card grid place-items-center mt-1">
      <Image src={src} alt="chain bookmark" width={24} height={24} />
    </div>
  );
};
