import { useEffect, useState } from "react";
import db from "./data/db.json";
import Automation from "./components/automation";
import FilterAutomation from "./components/filterAutomation/index";
import style from "./app.module.css";
function App() {
  const [automationsData, setAutomatiosData] = useState([]);
  const [filterAutomationsData, setFilterAutomationsData] = useState([]);
  const initData = () => {
    setAutomatiosData(db.data.oneClickAutomations.items);
    setFilterAutomationsData(db.data.oneClickAutomations.items);
  };
  useEffect(initData, []);
  return (
    <div className="container">
      <div className={style.filterPart}>
        {automationsData.length && (
          <FilterAutomation
            data={automationsData}
            handleFilterData={setFilterAutomationsData}
          />
        )}
      </div>
      <Automation data={filterAutomationsData} />
    </div>
  );
}

export default App;
