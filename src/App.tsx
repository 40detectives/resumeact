import { resumeDataES } from "@/data/fran.es";
import { Basic } from "@/sections/basic/basic";
import { Education } from "@/sections/education/education";
import { Summary } from "@/sections/summary/summary";
import "./App.css";

function App() {
  return (
    <main className="main-viewport">
        <Basic data={resumeDataES.basic} />
        {resumeDataES.summary && <Summary data={resumeDataES.summary} />}
        {resumeDataES.education && (
            <Education data={resumeDataES.education} />
        )}
    </main>
  );
}

export default App;
