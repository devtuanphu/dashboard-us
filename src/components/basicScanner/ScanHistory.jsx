const ScanHistory = () => {
  const data = [
    { url: "Google.com", ip: "[IP]", state: "Clean" },
    { url: "Goggle.xyz", ip: "[IP]", state: "Suspicious" },
    { url: "Protecly.com", ip: "127.0.0.1", state: "Clean" },
    { url: "upstracking.pw", ip: "[IP]", state: "Malicious" },
    { url: "freerobux.com", ip: "[IP]", state: "Malicious" },
    { url: "Amazon.com", ip: "[IP]", state: "Clean" },
    { url: "yootoob.com", ip: "[IP]", state: "Suspicious" },
    { url: "minekraft.xyz", ip: "[IP]", state: "Suspicious" },
    { url: "malicioussite.com", ip: "[IP]", state: "Malicious" },
  ];

  const getStateColor = (state) => {
    if (state === "Clean") return "text-green-500";
    if (state === "Suspicious") return "text-yellow-500";
    if (state === "Malicious") return "text-red-500";
    return "";
  };

  return (
    <div className=" bg-[#2a2e31] rounded-2xl text-white h-[600px]">
      <h2 className="px-2 py-1 text-lg font-semibold mb-4">Scan History</h2>
      <div className="m-6 overflow-x-auto w-[calc(100vw-92px)] tablet:w-auto">
        <div className="laptop:w-full rounded-xl shadow-lg min-w-[500px]">
          <div className="grid grid-cols-3 text-center font-semibold border-b border-gray-700 pb-2">
            <div className="text-gray-100 border-r-2 border-r-white">URL</div>
            <div className="text-gray-100 ">IP Address</div>
            <div className="text-gray-100 border-l-2 border-l-white">State</div>
          </div>
          <div className="max-h-[550px] overflow-y-auto">
            {data.map((item, index) => (
              <div
                key={index}
                className="grid grid-cols-3 gap-4 text-start pt-2 px-4 bg-[#3b3b3b] border-b border-gray-700 last:border-none "
              >
                <div className="flex flex-col">
                  <span>{item.url}</span>
                  <span className="text-xs text-sky-400">test</span>
                </div>
                <div>{item.ip}</div>
                <div className={getStateColor(item.state) + ` text-center`}>
                  {item.state}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ScanHistory;
