import ScanHistory from "../components/basicScanner/ScanHistory";
import SearchBar from "../components/basicScanner/SearchBar";
import UsageChart from "../components/basicScanner/UsageChart";

const BasicScanner = () => {
  return (
    <>
      <SearchBar />
      <div className="flex flex-col laptop:flex-row gap-4 mt-4">
        <div className="w-[calc(100vw-46px)] tablet:w-full laptop:w-[calc(50vw-170px)] desktop:w-[calc(50vw-170px)]">
          <UsageChart />
        </div>
        <div className="w-[calc(100vw-46px)] tablet:w-full laptop:w-[calc(50vw-170px)] desktop:w-[calc(50vw-170px)]">
          <ScanHistory />
        </div>
      </div>
    </>
  );
};

export default BasicScanner;
