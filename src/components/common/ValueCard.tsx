const ValueCard = ({
  title,
  order,
  mobileHeight = false,
  discription
}: {
  title: React.ReactNode;
  order: string;
  mobileHeight?: boolean;
  discription:string
}) => {
  return (
    <div
      className={`
        relative bg-primary text-secondary group overflow-hidden
        ${mobileHeight ? "h-[200px] md:h-auto" : ""}
        ${order}
      `}
    >
      <div className="hidden md:flex h-full items-center justify-center text-center transition-opacity duration-300 md:group-hover:opacity-0 p-8">
        <h3 className="heading-xs tracking-wide">{title}</h3>
      </div>
      <div
        className="
          absolute inset-0 bg-primary p-8
          flex flex-col items-center justify-center gap-4
          transform translate-y-0 md:translate-y-full
          opacity-100 md:opacity-0
          transition-all duration-500 ease-out
          md:group-hover:translate-y-0 md:group-hover:opacity-100
        "
      >
        <h3 className="text-lg font-light tracking-wide text-center">
          {title}
        </h3>

        <p className="md:text-body-sm text-body-xs leading-5 text-secondary/60 text-center max-w-[260px]">
         {discription}
        </p>
      </div>
    </div>
  );
};

export default ValueCard;
