import { Input } from "@/components/ui/input";
import "./Herocss.css";
// import { IconCloudDemo } from "./Animation";

const Searching = () => {
  return (
    <>
    <div className="search-container" style={{marginTop: "2rem"}}>
      <Input placeholder="Search Your Tools" className="search-input" />
      <button className="search-button">Search Tools</button>
    </div>
      {/* <div>
        <IconCloudDemo/>
      </div> */}
    </>
    
  );
};

export default Searching;
