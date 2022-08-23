import Header from "./components/Header";
import Levels from "./components/Levels";
import HomePage from "./components/HomePage";
import ThirdPage from "./components/ThirdPage";
import CoursePrice from "./components/CoursePrice";
import Learn from "./components/Learn";
import Discover from "./components/Discover";
import Footer from "./components/Footer";

function App() {
  return (
    < >
      <div>
        <Header />
        <HomePage />
      </div>

      <div className=" py-52 lg:py-10">

        <ThirdPage />
      </div>

      <div>

        <Levels />
      </div>
      <div >
        <CoursePrice />

      </div>

      <div className=" py-10">
        <Learn />

      </div>

      <div>
        <Discover/>
      </div>

      <Footer/>
    </>)
}
export default App;
