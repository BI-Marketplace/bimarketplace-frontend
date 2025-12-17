import { FaStar } from 'react-icons/fa';

const SingleReviewCard = () => {
  return (
    <div className="border rounded-xl p-6 bg-white hover:shadow-md transition-shadow duration-300 bg-white">
      <div className="flex items-center justify-between">
        <h4 className="font-normal text-lg text-gray-800">Jonathan G.</h4>
        <p className="text-sm text-gray-500">October 25, 2025</p>
      </div>

      <div className="flex items-center mt-2">
        {[...Array(5)].map((_, i) => (
          <FaStar 
            key={i} 
            className={`text-lg text-yellow-500`} 
          />
        ))}
        <span className="ml-2 text-sm text-gray-600">5/5</span>
      </div>

      <p className="text-gray-700 mt-4 leading-relaxed">
        TechMart NG is your go-to store for quality electronics, fashion items, and lifestyle products. We're committed to offering authentic goods, fast delivery, and reliable customer support. With thousands of satisfied buyers, our goal is to make online shopping smooth, safe, and affordable for everyone.
      </p>
    </div>
  );
};

export default SingleReviewCard;