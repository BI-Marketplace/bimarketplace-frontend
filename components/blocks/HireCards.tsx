import { FaStar } from "react-icons/fa6";

interface HireCardsProps{
    image: string,
    fullName: string,
    subtitle: string,
    reviews: string,
    description: string,
    button: string,
    button2: string,
    ratings:string

}

export default function HireCards({image, fullName, subtitle, reviews, description, button, button2}: HireCardsProps) {
    return (
   <>
    {/* <div className="w-[580px]">
    <div className="w-full h-[205px] border rounded-lg shado hover:shadow-lg transition-shadow duration-300 bg-white gap-1 flex justify-center items-center cursor-pointer">
      
      <div className="w-[50%] h-full flex justify-start items-center ml-5">
        <img
          src={image}
          alt=""
          className="w-[150px] h-[150px] rounded-[8px] object-cover"
        />
      </div>

      <div>
        <h3 className="text-[16px] font-medium font-inter mb-2 text-black">
          {fullName}
        </h3>

        <div className="text-[14px] font-inter font-medium text-black mb-2 flex items-center">
          <p>
          {subtitle}
          </p>
          <FaStar className="text-yellow-500 mx-2" />
          <p>
          {reviews}
          </p>
         
        </div>

        <p className="text-black text-[12px] mb-4">
          {description}
        </p>

        <div className="w-full">
          <button className="bg-gray-100 text-gray-700 font-inter text-[14px] text-black px-3 py-2 rounded-full">
            {button}
          </button>

          <button className="bg-gray-100 text-gray-700 mx-3 font-inter text-[14px] text-black px-4 py-2 rounded-full">
            {button2}
          </button>
        </div>
      </div>

    </div>
  </div> */}
  <div className="shadow-sm hover:shadow-lg cursor-pointer rounded-[12px] bg-white w-full w-max-[580px] flex items-center gap-5  py-5">
      <div className=" h-full flex justify-start items-center ml-5">
        <img
          src={image}
          alt=""
          className=" rounded-[8px] object-cover"
        />
      </div>
      <div>
    <h3 className="text-[16px] font-medium font-inter mb-2 text-black">
          {fullName}
        </h3>   
        <div className="text-[14px] font-inter font-medium text-black mb-2 flex items-center">
          <p>
          {subtitle}
          </p>
          <FaStar className="text-yellow-500 mx-2" />
          <p>
          {reviews}
          </p>  
      </div>
       <p className="text-black text-[12px] mb-4">
          {description}
        </p>

        <div className="w-full">
          <button className="bg-gray-100 text-gray-700 font-inter text-[14px] text-black px-3 py-2 rounded-full">
            {button}
          </button>

          <button className="bg-gray-100 text-gray-700 mx-3 font-inter text-[14px] text-black px-4 py-2 rounded-full">
            {button2}
          </button>
        </div>
      </div>
  </div>
  </>

    );
}
