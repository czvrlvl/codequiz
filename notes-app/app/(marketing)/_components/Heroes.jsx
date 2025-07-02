import Image from "next/image";

export const Heroes = () => {
  return (
    <div className="flex flex-col itmes-center justify-center max-w-5xl">
      <div className="flex items-center">
        <div className="relative w-[300px] h-[300px] sm:w-[350px] sm:h-[350px] md:w-[400px] md:h-[400px]">
          <Image
            src="/rafiki.png"
            fill
            className="object-contain"
            alt="photo"
          />
        </div>
      </div>
    </div>
  );
};
