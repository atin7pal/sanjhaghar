

export function Trendingmenu({classname, title, iconbg, description, subdescription }) {
    return (
      <>
        <div
          className={`w-full h-full flex flex-col gap-3 justify-center items-center text-center ${classname}`}
        >
          <div
            className={`bg-contain w-[150px] h-[150px] flex-col bg-center rounded-full bg-no-repeat flex justify-center items-center text-4xl max-[850px]:w-[150px] max-[850px]:h-[150px]`}
            style={{ backgroundImage: `url(${iconbg})` }}
          >
          </div>
          <h2 className="text-2xl font-semibold themetext">{title}</h2>
          <p className="text-gray-800 text-sm min-h-[50px]">{description}</p>
           <p className=" text-xs text-gray-400 min-h-[64px]">
          <span>{subdescription}</span>
           </p>
         </div>
      </>
    );
  }