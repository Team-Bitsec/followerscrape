export function H1({ children }) {
  return <h1 className=" font-bold 
    leading-[1.15] 
    text-[calc(23.52px+1.06667vw)] 
 text-[#2d3b48] 
    break-normal capitalize">{children}</h1>;
}
export function Paragraph({children}){
    return <p className="
    text-[#4a5968]
    text-[17px] capitalize font-semibold mb-4 tracking-wider mt-2
    
    "
    > {children}</p>
}

export function H6({children}){
return <h6 className="mt-4 text-gray-600  text-[14px] md:text-lg capitalize">{children}</h6>

}
export function Button({children}){
    return <button className="mt-2 cursor-pointer bg-black text-white px-6 py-2 rounded-md hover:bg-orange-600 transition-all duration-300 text-lg font-semibold capitalize sm:px-6 sm:py-2 md:px-8 md:py-2">{children}</button>
}




