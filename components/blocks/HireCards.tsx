

interface HireCardsProps{
    image: string,
    fullName: string,
    subtitle: string,
    description: string,
    button: string

}

export default function HireCards({image, fullName, subtitle, description, button}: HireCardsProps) {
    return (
      <div className="w-[550px] h-[205px]">
        <div className="border rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300">
          <img
            src={image}
            alt={fullName}
            className="w-24 h-24 rounded-full mx-auto mb-4"
          />
          
          <h3 className="text-xl font-semibold text-center mb-2">{fullName}</h3>
          <h4 className="text-md font-medium text-center text-gray-600 mb-4">
            {subtitle}
          </h4>
          <p className="text-gray-700 text-center mb-6">{description}</p>
          <div className="text-center">
            <button className="bg-green-600 text-white px-4 py-2 rounded hover:bg-green-700 transition-colors duration-300">
              {button}
            </button>
          </div>
        </div>
      </div>
    );
}
