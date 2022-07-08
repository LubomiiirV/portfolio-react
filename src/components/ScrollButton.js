import ScrollToTop from "react-scroll-to-top";
import "../style-components/scroll-btn.css";

function scrollToTop() {
  return (
    <div>
      <ScrollToTop className="scroll-up-btn" smooth />
    </div>
  );
}

export default scrollToTop;
