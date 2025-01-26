import { Input } from "antd";
import { SearchOutlined } from "@ant-design/icons";
import { useState } from "react";

const SectionComponent = () => {
  const initialData = Array.from({ length: 20 }, (_, index) => ({
    id: index + 1,
    url: `typo url ${index + 1}`,
    recordType: `[record type ${index + 1}]`,
    currentDns: `[current dns parking ${index + 1}]`,
    previousDns: `[last known dns ${index + 1}]`,
    updated: `[date ${index + 1}]`,
  }));

  const [search, setSearch] = useState({
    url: "",
    recordType: "",
    currentDns: "",
    previousDns: "",
    updated: "",
  });

  const handleSearchChange = (e, key) => {
    setSearch({ ...search, [key]: e.target.value });
  };

  const filteredData = initialData.filter((item) =>
    Object.keys(search).every((key) =>
      item[key].toLowerCase().includes(search[key].toLowerCase())
    )
  );

  return (
    <div className="overflow-x-auto w-[calc(100vw-46px)] tablet:w-[calc(100vw-56px)] laptop:w-[calc(100vw-334px)] desktop:w-full ">
      <div className="bg-[#333537] text-white rounded-lg p-6 mt-[24px] min-w-[1040px]">
        <div className="grid grid-cols-5 gap-4 mb-4">
          <div className=" text-sm font-semibold">Typosquat link</div>
          <div className=" text-sm font-semibold">Type of record</div>
          <div className=" text-sm font-semibold">Current dns</div>
          <div className=" text-sm font-semibold">Previous dns</div>
          <div className=" text-sm font-semibold">Updated</div>
        </div>
        <div className="grid grid-cols-5 gap-4 pb-4 mb-2 border-white border-b">
          <div>
            <Input
              placeholder="Search URL"
              value={search.url}
              onChange={(e) => handleSearchChange(e, "url")}
              prefix={<SearchOutlined style={{ color: "gray" }} />}
              className="bg-[#242424] text-white placeholder-gray-400 rounded-sm hover:bg-[#242424] max-w-[160px]"
            />
          </div>
          <div>
            <Input
              placeholder="Search Record Type"
              value={search.recordType}
              onChange={(e) => handleSearchChange(e, "recordType")}
              prefix={<SearchOutlined style={{ color: "gray" }} />}
              className="bg-[#242424] text-white placeholder-gray-400 rounded-sm hover:bg-[#242424] max-w-[160px]"
            />
          </div>
          <div>
            <Input
              placeholder="Search Current DNS"
              value={search.currentDns}
              onChange={(e) => handleSearchChange(e, "currentDns")}
              prefix={<SearchOutlined style={{ color: "gray" }} />}
              className="bg-[#242424] text-white placeholder-gray-400 rounded-sm hover:bg-[#242424] max-w-[160px]"
            />
          </div>
          <div>
            <Input
              placeholder="Search Previous DNS"
              value={search.previousDns}
              onChange={(e) => handleSearchChange(e, "previousDns")}
              prefix={<SearchOutlined style={{ color: "gray" }} />}
              className="bg-[#242424] text-white placeholder-gray-400 rounded-sm hover:bg-[#242424] max-w-[160px]"
            />
          </div>
          <div>
            <Input
              placeholder="Search Updated"
              value={search.updated}
              onChange={(e) => handleSearchChange(e, "updated")}
              prefix={<SearchOutlined style={{ color: "gray" }} />}
              className="bg-[#242424] text-white placeholder-gray-400 rounded-sm hover:bg-[#242424] max-w-[160px]"
            />
          </div>
        </div>
        <div className="max-h-[400px] overflow-y-auto">
          {filteredData.map((item) => (
            <div
              className="grid grid-cols-5 gap-4 border-white border-b"
              key={item.id}
            >
              <p className="p-1 mb-0 font-medium">{item.url}</p>
              <p className="p-1 mb-0 font-medium">{item.recordType}</p>
              <p className="p-1 mb-0 font-medium">{item.currentDns}</p>
              <p className="p-1 mb-0 font-medium">{item.previousDns}</p>
              <p className="p-1 mb-0 font-medium">{item.updated}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default SectionComponent;
