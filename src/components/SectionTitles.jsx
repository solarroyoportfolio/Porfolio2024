
export const SectionTitles = ({subtitle,title}) => {
  return (
    <div className="justify-center text-center items-center lg:p-20 p-5 leading-10"
    >
         <h5 className="text-color_gray ">{subtitle}</h5>
      <h2 className="text-color_primary text-3xl animate-pulse font-semibold">
        {title}
      </h2>
    </div>
  )
}
