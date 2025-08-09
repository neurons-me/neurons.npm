// neurons.me/src/App.jsx
import { BrowserRouter as Router, Route, Routes, Navigate } from 'react-router-dom';
import Welcome from './pages/Welcome/Welcome';
import TermsAndConditions from './components/Neurons/TermsAndConditions'; // Import TermsAndConditions
import PrivacyPolicy from './components/Neurons/PrivacyPolicy'; // Import PrivacyPolicy
import MinimalLayout from './pages/MinimalLayout';
import InstallMe from './pages/Install/InstallMe';
//Pages
//About
import AboutPage from './pages/About/AboutPage';
import WhoWeArePage from './pages/About/WhoWeArePage';
import CodeBreakersPage from './pages/About/CodeBreakersPage';
import ContactPage from './pages/About/ContactPage';
//OpenSource
import Ecosystem from './pages/OpenSource/Ecosystem';
import Contributing from './pages/OpenSource/Contributing';
import Roadmap from './pages/OpenSource/Roadmap';
//AllThis
import AllThis from './pages/AllThis/All.This';
import ThisMePage from './pages/AllThis/This.Me';
import ThisWallet from './pages/AllThis/This.Wallet';
import ThisImg from './pages/AllThis/This.Img';
import ThisAudio from './pages/AllThis/This.Audio';
import ThisBlockchain from './pages/AllThis/This.Blockchain';
import ThisPixel from './pages/AllThis/This.Pixel';
import ThisVideo from './pages/AllThis/This.Video';
import ThisDOM from './pages/AllThis/This.DOM';
import ThisDictionaries from './pages/AllThis/This.Dictionaries';
import ThisEnv from './pages/AllThis/This.Env';
//THIS.GUI
import ThisGUIPage from './pages/AllThis/This.Gui/This.GUI.Page';
import GUI_Drawer_Data from './pages/AllThis/This.Gui/GUI_Drawer_Data';
//THI.GUI APPBARS
import AppBarsPage from './pages/AllThis/This.Gui/pages/AppBars/AppBarsPage';
import TopAndSideBarPage from './pages/AllThis/This.Gui/pages/AppBars/TopAndSideBarPage';
//This.Gui - Buttons
import ButtonsPage from './pages/AllThis/This.Gui/pages/Buttons/ButtonsPage';
//This.Gui - Code
import CodePage from './pages/AllThis/This.Gui/pages/Code/CodePage';
import CodeBlockPage from './pages/AllThis/This.Gui/pages/Code/CodeBlockPage';
//This.Gui - Cards
import CardsPage from './pages/AllThis/This.Gui/pages/Cards/CardsPage';
import ModuleCardPage from './pages/AllThis/This.Gui/pages/Cards/ModuleCardPage';
import LilBoxPage from './pages/AllThis/This.Gui/pages/Cards/LilBoxPage';
import GridmePage from './pages/AllThis/This.Gui/pages/Cards/GridmePage';
//This.GUI - feedback
import FeedbackPage from './pages/AllThis/This.Gui/pages/Feedback/FeedbackPage';
import CalloutPage from './pages/AllThis/This.Gui/pages/Feedback/CalloutPage';
//This.Gui - Layout
import ContainersPage from './pages/AllThis/This.Gui/pages/Layout/ContainersPage';
import GridPage from './pages/AllThis/This.Gui/pages/Layout/GridPage';
import PageDividerPage from './pages/AllThis/This.Gui/pages/Layout/PageDividerPage';
import SectionPage from './pages/AllThis/This.Gui/pages/Layout/SectionPage';
import PageEmbedPage from './pages/AllThis/This.Gui/pages/Media/PageEmbedPage';
import PageImagePage from './pages/AllThis/This.Gui/pages/Media/PageImagePage';
//This.Gui - Organization
import TableOfContentsPage from './pages/AllThis/This.Gui/pages/Organization/TableOfContentsPage';
import TabsPage from './pages/AllThis/This.Gui/pages/Organization/TabsPage';
//This.Gui - Text
import PageListPage from './pages/AllThis/This.Gui/pages/Text/PageListPage'; 
import PageParagraphPage from './pages/AllThis/This.Gui/pages/Text/PageParagraphPage';
import PageTitlePage from './pages/AllThis/This.Gui/pages/Text/PageTitlePage';

import ThisText from './pages/AllThis/This.Text';
import ThisURL from './pages/AllThis/This.URL';
import ThisDir from './pages/AllThis/This.Dir';
//Business Solutions
import ServiceHubPage from './pages/ServiceHub/ServiceHubPage';
import BusinessAI from './pages/ServiceHub/AIIntegration';
import DataDriven from './pages/ServiceHub/DataDriven';
import MarketingSolutions from './pages/ServiceHub/MarketingSolutions';
import Branding from './pages/ServiceHub/Branding';
import SystemDevelopment from './pages/ServiceHub/SystemDevelopment';
import CyberSecurity from './pages/ServiceHub/CyberSecurity';
//Me Protocol
import MeProtocolRFC from './pages/Me-Protocol/Me-Protocol-RFC';
import WhitePaper from './pages/Me-Protocol/WhitePaper';
const App = () => {
    return (
    <Router>
        <Routes>
        <Route path="/" element={<Welcome />} />
        <Route element={<MinimalLayout topic="About" />}>
          {/* Introduction */}
          <Route path="/about" element={<AboutPage />} />
          <Route path="/WhoWeAre" element={<WhoWeArePage />} />
          <Route path="/c0debreakers" element={<CodeBreakersPage />} />
          <Route path="/contact" element={<ContactPage />} />
          <Route path="/open-source" element={<Ecosystem />} />
          {/* Open Source */}
          <Route path="/open-source/ecosystem" element={<Ecosystem />} /> 
          <Route path="/open-source/roadmap" element={<Roadmap />} />
          <Route path="/open-source/contributing" element={<Contributing />} /> 
        </Route>
        <Route element={<MinimalLayout topic="All.This" />}>
          {/* All.This */}
          <Route path="/All.This" element={<AllThis />} />
          <Route path="/this.me" element={<ThisMePage />} />
          <Route path="/this.wallet" element={<ThisWallet />} />
          <Route path="/this.img" element={<ThisImg />} />
          <Route path="/this.audio" element={<ThisAudio />} />
          <Route path="/this.blockchain" element={<ThisBlockchain />} /> 
          <Route path="/this.pixel" element={<ThisPixel />} />
          <Route path="/this.video" element={<ThisVideo />} />
          <Route path="/this.DOM" element={<ThisDOM />} />
          <Route path="/this.dictionaries" element={<ThisDictionaries />} />
          <Route path="/this.env" element={<ThisEnv />} />
          <Route path="/this.text" element={<ThisText />} />
          <Route path="/this.url" element={<ThisURL />} />
          <Route path="/this.dir" element={<ThisDir />} />
        </Route>
        {/* THIS-GUI */}
        <Route
          element={<MinimalLayout topic="All.This" contextDrawer={GUI_Drawer_Data} />}
        >
          <Route path="/this.GUI" element={<ThisGUIPage />} />
           {/* THIS-GUI AppBars */}
          <Route path="/this.GUI/AppBars" element={<AppBarsPage />} />
          <Route path="/this.GUI/TopAndSideBar" element={<TopAndSideBarPage />} />
          {/* THIS-GUI Buttons */}
          <Route path="/this.GUI/Buttons" element={<ButtonsPage />} />
          {/* THIS-GUI Code */}
          <Route path="/this.GUI/Code" element={<CodePage />} />
          <Route path="/this.GUI/CodeBlock" element={<CodeBlockPage />} />
          {/* THIS-GUI Cards */}
          <Route path="/this.GUI/Cards" element={<CardsPage />} />
          <Route path="/this.GUI/ModuleCard" element={<ModuleCardPage />} />
          <Route path="/this.GUI/LilBox" element={<LilBoxPage />} />
          <Route path="/this.GUI/Gridme" element={<GridmePage />} />
          {/* THIS-GUI Feedback */}
          <Route path="/this.GUI/Feedback" element={<FeedbackPage />} />
          <Route path="/this.GUI/Callout" element={<CalloutPage />} /> 

          {/* THIS-GUI Layout */}
          <Route path="/this.GUI/Containers" element={<ContainersPage />} />
          <Route path="/this.GUI/Grid" element={<GridPage />} />
          <Route path="/this.GUI/PageDivider" element={<PageDividerPage />} />
          <Route path="/this.GUI/Section" element={<SectionPage />} />
          <Route path="/this.GUI/PageEmbed" element={<PageEmbedPage />} />
          <Route path="/this.GUI/PageImage" element={<PageImagePage />} />
          <Route path="/this.GUI/TableOfContents" element={<TableOfContentsPage />} />
          <Route path="/this.GUI/Tabs" element={<TabsPage />} />
          <Route path="/this.GUI/PageList" element={<PageListPage />} />
          <Route path="/this.GUI/PageParagraph" element={<PageParagraphPage />} />
          <Route path="/this.GUI/PageTitle" element={<PageTitlePage />} />
        </Route>

        <Route element={<MinimalLayout topic="ServiceHub" />}>
          {/* Me Protocol */}
          {/* Business Solutions */}
          <Route path="/ServiceHub" element={<ServiceHubPage />} />
          <Route path="/ai-for-your-business" element={<BusinessAI />} />
          <Route path="/business-data" element={<DataDriven />} />
          <Route path="/business-marketing" element={<MarketingSolutions />} />
          <Route path="/business-branding" element={<Branding />} />
          <Route path="/business-system-development" element={<SystemDevelopment />} />
          <Route path="/business-cyber-security" element={<CyberSecurity />} />
        </Route>
        <Route element={<MinimalLayout topic="Me Protocol" />}>
          {/* Me Protocol */}
          {/* Policies */}
          <Route path="/terms-and-conditions" element={<TermsAndConditions />} />
          <Route path="/privacy-policy" element={<PrivacyPolicy />} />
          <Route path="/me-protocol-rfc" element={<MeProtocolRFC />} />
          <Route path="/me-protocol-whitepaper" element={<WhitePaper />} />
          {/* Puedes seguir con las demás rutas aquí... */}
          <Route path="/install-me" element={<InstallMe />} />
        </Route>
        {/* Add more routes as needed */}
        </Routes>
    </Router>
    );
};

export default App;
