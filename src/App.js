import "./App.css";
import Avatar from "./Avatar";
import FifthSection from "./FifthSection";
import FourthSection from "./FourthSection";
import SecondSection from "./SecondSection";
import ThirdSection from "./ThirdSection";
import SixthSection from "./SixthSection";

function App() {
  return (
    <div>
      <div className="main">
        <div className="header">
          <Avatar />
        </div>
        <div className="section-content">
          <div className="content">
            <SecondSection />
          </div>
          <div className="content">
            <ThirdSection />
          </div>
          <div className="content">
            <FourthSection />
          </div>
        </div>
      </div>
      <div className="content">
        <FifthSection />
      </div>
      <div className="content">
        <SixthSection />
      </div>
    </div>
  );
}

export default App;
