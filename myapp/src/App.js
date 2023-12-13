import PropsFuncEx1 from './Day4/PropsFuncEx1.js';
import ArrowProps from './Day4/ArrowProps.js';
import StateClassCom from './Day4/StateClassCom.js';
import StateFunction from './Day4/StateFunction.js';
import Stateholdsobj from './Day4/Stateholdsobj.js';
import TwoWayBinding from './Day4/TwoWayBinding.js';
import Parent from './Day4/Parent.js';
import Default from './Day4/Default.js';
import DynamicRendering from './Day4/DynamicRendering.js';
// import PropsClass from './Day4/PropsClass.js';

function App() {
  return (
    <div>
     {/* <PropsFunctional name="Sangu"></PropsFunctional>
    //  <PropsClass college="skct"></PropsClass> */}
    <PropsFuncEx1 name="Sangu" color="blue"></PropsFuncEx1>
    <ArrowProps clg="skct"></ArrowProps>
    <StateClassCom/>
    <StateFunction/>
    <Stateholdsobj/>
    <TwoWayBinding/>
    <Parent/>
    <Default/>
    <DynamicRendering/>
    </div>
  );
}

export default App;
