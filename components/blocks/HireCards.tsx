

interface HireCardsProps{
    image: string,
    fullName: string,
    subtitle: string,
    description: string,
    button: string,
    button2: string

}

export default function HireCards({image, fullName, subtitle, description, button, button2}: HireCardsProps) {
    return (
      <div className="w-[580px]">
        <div className="w-full h-[205px] border rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300 bg-white flex justify-center items-center">
          <div className="w-[50%] h-full flex justify-center items-center">
            <img
            src={image}
            alt=""
            className="w-[140px] h-[140px] rounded-[15px] mx-auto mb-4"
          />
            </div>
           <div>
            
          <h3 className="text-[16px] font-medium font-inter mb-2 text-black ">{fullName}</h3>
          <h4 className="text-[14px] font-inter font-medium text-black mb-2">
            {subtitle}
          </h4>
          <p className="text-black text-[12px] mb-4">{description}</p>
          <div className="w-full">
            <button className="bg-[#D9D9D9] font-inter text-[14px] text-black px-3 py-2 rounded-full">
              {button}
            </button>
            <button className="bg-[#D9D9D9] mx-3 font-inter text-[14px] text-black px-4 py-2 rounded-full">
              {button2}
            </button>
          </div>
            </div> 
        </div>
      </div>
    );
}
