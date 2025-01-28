import { Input } from "antd";
import { SearchOutlined } from "@ant-design/icons";

const SearchBar = () => {
  return (
    <div className="flex items-center justify-center h-[350px] tablet:h-[450] laptop:h-[550px] bg-[#2a2e31] rounded-2xl">
      <div className="relative w-full mx-6 tablet:mx-0 tablet:w-96">
        <Input
          placeholder="Enter anything"
          className="pl-4 py-1 pr-8 rounded-lg shadow-md text-white text-lg font-semibold placeholder-white bg-[#3b3b3b] hover:bg-[#3b3b3b] border border-gray-500 "
        />
        <div className="absolute top-[10px] right-2 bottom-0 cursor-pointer">
          <SearchOutlined className="text-[#66a6ff] text-lg font-bold" />
        </div>
      </div>
    </div>
  );
};

export default SearchBar;
