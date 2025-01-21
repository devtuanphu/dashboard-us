import { Avatar } from "antd";
import imageMap from "../../assets/images/map.png";

const OverallCyberThreats = () => {
  const data = [
    { country: "United States", flag: "🇺🇸", threats: 32900 },
    { country: "France", flag: "🇫🇷", threats: 30456 },
    { country: "India", flag: "🇮🇳", threats: 29703 },
    { country: "Spain", flag: "🇪🇸", threats: 27533 },
    { country: "Bangladesh", flag: "🇧🇩", threats: 27523 },
  ];

  return (
    <div className="bg-[#333537] text-white rounded-lg p-6 mt-[24px]">
      {/* Title */}
      <div className="text-xl font-bold leading-6 max-w-60 mb-4">
        Overall Cyber Threats by Country
      </div>

      {/* Responsive Layout */}
      <div className="flex flex-col tablet:flex-row gap-4">
        {/* Map Section */}
        <div className="flex-1 rounded-lg overflow-hidden">
          <img
            src={imageMap}
            alt="World Map"
            className="w-full h-60 object-cover"
          />
        </div>

        {/* Threats List */}
        <div className="flex-1 space-y-4 max-h-[220px] overflow-y-auto px-2">
          {data.map((item, index) => (
            <div key={index} className="flex items-center justify-between">
              <div className="flex items-center gap-2">
                <Avatar size={36}>{item.flag}</Avatar>
                <span className="text-sm">{item.country}</span>
              </div>
              <span className="text-sm">{item.threats}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default OverallCyberThreats;
