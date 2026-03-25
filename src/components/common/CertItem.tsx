import Image from "next/image";

function CertItem({
  src,
  desc,
  showDivider,
}: {
  src: string;
  desc: string;
  showDivider?: boolean;
}) {
  return (
    <div className={`relative flex flex-col items-center text-center `}>
      <div className="relative w-[42px] h-[42px] sm:w-[50px] sm:h-[50px] md:w-[100px] md:h-[100px] mb-3">
        <Image src={src} alt={desc} fill className="object-contain" priority/>
      </div>
      <div className="md:text-body-md text-body-xs text-muted-foreground leading-relaxed">
        {desc}
      </div>
      {showDivider && (
        <span className="absolute right-[-4%] md:block hidden top-4 h-16 w-px bg-primary/20" />
      )}
    </div>
  );
}

export default CertItem;
