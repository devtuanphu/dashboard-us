const Main = () => {
  const data = Array.from({ length: 10 }, (_, index) => ({
    key: index + 1,
    link: `phish link ${index + 1}`,
    status: index % 2 === 0 ? "online" : "offline",
    lastScanDate: "2023-12-25",
    scanDate: "2023-12-26",
  }));

  return (
    <div className="">
      <div className="flex flex-col laptop:flex-row gap-4">
        <div className="bg-[#333537] text-white rounded-lg w-full laptop:w-7/12">
          <div className="text-xl font-bold mb-4 ml-2">Statistics Report</div>
          <div className="mb-4 px-4 tablet:px-8 desktop:px-14 flex flex-row gap-4 flex-wrap tablet:flex-nowrap laptop:flex-wrap desktop:flex-nowrap">
            <div span={8} className="w-1/3 min-w-[124px] ">
              <div className="bg-[#202020] text-white text-start px-2 rounded-lg">
                <div className="font-semibold text-xs">Phishing</div>
                <div className="text-xl font-bold leading-6">195</div>
              </div>
            </div>
            <div span={8} className="w-1/3 min-w-[124px] ">
              <div className="bg-[#444] text-white text-start px-2 rounded-lg">
                <div className="font-semibold text-xs">Typosquat</div>
                <div className="text-xl font-bold leading-6">26</div>
              </div>
            </div>
            <div span={8} className="w-1/3 min-w-[124px] ">
              <div className="bg-[#a1a1a1] text-white text-start px-2 rounded-lg">
                <div className="font-semibold text-xs">Combined Threats</div>
                <div className="text-xl font-bold leading-6">221</div>
              </div>
            </div>
          </div>
          <div className="px-4 tablet:px-8 laptop:px-12 pb-6 pt-2">
            <div className="bg-[#d9d9d933] h-40 rounded-lg flex items-center justify-center">
              <span className="text-white text-3xl font-bold mx-2">
                Line Graph Here of Data
              </span>
            </div>
          </div>
        </div>

        <div className=" bg-[#333537] text-white rounded-lg py-2 w-full laptop:w-5/12">
          <div className="text-lg font-medium mb-4 ml-2">Tracked Phishes</div>
          <div className="space-y-4 overflow-y-auto max-h-[290px]">
            {data.map((item) => (
              <div
                key={item.key}
                className="flex justify-between items-center px-4"
              >
                <div className="text-sm">{item.link}</div>
                <div className="text-xs text-gray-400">{item.status}</div>
                <div className="text-xs">{item.lastScanDate}</div>
                <div className="text-xs">{item.scanDate}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Main;
