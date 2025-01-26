import Header from "./Header";
import { useState } from "react";
import Sidebar from "./Sidebar";
import Home from "../page/Home";

export default function DashboardLayout() {
  const [selectedContent, setSelectedContent] = useState(<Home />);

  return (
    <div className="bg-[#121213]">
      <div className="flex gap-6 px-6 py-4 overflow-hidden">
        <div className="hidden laptop:block">
          <Sidebar onSelect={setSelectedContent} />
        </div>

        <div className="flex-1 flex flex-col min-h-screen">
          <Header onSelect={setSelectedContent} />

          <div className="py-6 flex-1 h-full  overflow-y-auto overflow-hidden">
            {selectedContent}
          </div>
        </div>
      </div>
    </div>
  );
}
