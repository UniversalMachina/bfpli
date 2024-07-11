const Main = () => {
  return (
    <div className="w-full relative bg-antiquewhite overflow-hidden flex flex-col items-center justify-center pt-10 pb-10 pr-10 pl-10 box-border gap-5 leading-normal tracking-normal text-center text-[30.1px] text-red font-roboto min-h-screen">
      <header className="w-full flex justify-center max-w-full">
        <img
          className="w-[441.4px] relative max-h-full object-cover max-w-full"
          loading="lazy"
          alt=""
          src="/group-1301-1@2x.png"
        />
      </header>
      <section className="w-full flex flex-col items-center justify-center pt-0 px-0 pb-10 box-border gap-5 max-w-full text-center text-[80px] text-black font-rounded-mplus-1c-bold">
        <div className="w-full flex justify-center py-0 px-5 box-border max-w-full">
          <b className="h-[173px] w-full relative inline-block shrink-0 max-w-full text-[53px]">Whoops!</b>
        </div>
        <b className="relative text-[36px] font-roboto text-red whitespace-nowrap overflow-hidden text-ellipsis">
          *This website doesn't align with your values*
        </b>
      </section>
      <div className="w-full flex flex-col items-center justify-center max-w-full">
        <div className="flex flex-col items-center justify-center">
          <b className="relative text-[24px]">Thank you for choosing</b>
          <div className="flex items-center justify-center py-0 pr-5 pl-5">
            <img
              className="h-[39.2px] w-[97.5px] relative object-cover"
              loading="lazy"
              alt=""
              src="/group-1301-2@2x.png"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Main;
