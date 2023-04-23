import { BrowserRouter, Routes, Route } from "react-router-dom";
import Campaigns from "./component/Campaigns";
import MailThread from "./component/MailThread";
import SmsThread from "./component/SmsThread";
import CampaignView from "./component/CampaignView";



function App() {

  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/email-thread" element={<MailThread />}/>
          <Route path="/sms-thread" element={<SmsThread/>}/>
          <Route path="/view-campaign/:id" element={<CampaignView/>}/>
          
          <Route index path="/" element={<Campaigns />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
