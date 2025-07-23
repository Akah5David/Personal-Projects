// import { useLoaderData } from "react-router-dom";

import CategoriesPage from "../components/Categories";
import DocumentriesPage from "../components/Documentries";
import LatestDocumentriesPage from "../components/LatestDocumentries";
import AvailablePage from "../components/Available";
import QuestionsPage from "../components/Questions";
import PlatformPage from "../components/Platform.jsx";
import FooterPage from "../components/Footer";
import SubscriptionPage from "../components/Subscription.jsx";
import { useOutletContext } from "react-router-dom";

export default function MainPage() {
  const LoadersData = useOutletContext();
  const categoryData = LoadersData.categData;
  const QuestionData = LoadersData.questionsData;
  console.log("Loaded Categories", categoryData);
  return (
    <div className="  min-w-screen min-h-screen max-w-screen max-h-screen">
      <CategoriesPage categories={categoryData} />
      <DocumentriesPage categories={categoryData} />
      <LatestDocumentriesPage categories={categoryData} />
      <SubscriptionPage />
      <AvailablePage />
      <hr className="border-0 bg-[#817d7d] h-[1px] mx-[50px]" />
      <QuestionsPage QuestionDatas={QuestionData} />
      <PlatformPage />
      <FooterPage />
    </div>
  );
}
