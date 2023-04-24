import { BrowserRouter, Routes, Route } from "react-router-dom";
import Campaigns from "./component/Campaigns";
import MailThread from "./component/MailThread";
import SmsThread from "./component/SmsThread";
import CampaignView from "./component/CampaignView";
import EditSmsCampaign from "./component/EditSmsCampaign";
import EditEmailCampaign from "./component/EditEmailCampaign";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/email-thread/" element={<MailThread />} />
          <Route path="/sms-thread" element={<SmsThread />} />
          <Route path="/sms-edit/:id" element={<EditSmsCampaign />} />
          <Route path="/email-edit/:id" element={<EditEmailCampaign />} />
          <Route path="/view-campaign/:id" element={<CampaignView />} />

          <Route index path="/" element={<Campaigns />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
