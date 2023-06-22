import Page1 from "./fati/Page1";
import Page2 from "./fati/Page2";
import { items } from "./fati/Page1";

function nav() {


  return (<div>
  
  <Routes>
  <Route exact path="/" element={<Page1 />} />
        <Route path="/details/:id" element={ <Page2 items={items}/>} />
      </Routes>
</div>
 );
}

export default nav;