import { HashRouter as Router, Route } from "react-router-dom";
import PersonalInfoMain from "./components/personalInfo/PersonalInfoMain";
import Header from "./components/common/Header";
import "./css/config.scss";
import "./css/style.scss";
import PersonalInfo from "./components/personalInfo/steps/PersonalInfo";
import IncomeInfo from "./components/personalInfo/steps/IncomeInfo";
import AssetsInfo from "./components/personalInfo/steps/AssetsInfo";
import ExpenseInfo from "./components/personalInfo/steps/ExpenseInfo";
import GoalsInfo from "./components/personalInfo/steps/GoalInfo";
import Home from "./components/home/Home";
import Login from "./components/login/Login";
import Report  from './components/Report';
import {Footer} from './components/Footer';


function App() {
  return (
    <div className="bg-white">
      <Header></Header>
      <Router baseName="/">
        <PersonalInfoMain>
        <Route exact path="/" component={Home}></Route>
        <Route exact path="/report" component={Report}></Route>
        <Route exact path="/login" component={Login}></Route>
          <Route exact path="/info/personal" component={PersonalInfo}></Route>
          <Route exact path="/info/income" component={IncomeInfo}></Route>
          <Route exact path="/info/assets" component={AssetsInfo}></Route>
          <Route exact path="/info/expense" component={ExpenseInfo}></Route>
          <Route exact path="/info/goals" component={GoalsInfo}></Route>
        </PersonalInfoMain>
        <Footer/>
      </Router>
    </div>
  );
}

export default App;
