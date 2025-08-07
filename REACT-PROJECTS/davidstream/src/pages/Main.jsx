// import { useLoaderData } from "react-router-dom";

import CategoriesPage from "../components/Categories";
import DocumentariesPage from "../components/Documentaries";
import LatestDocumentariesPage from "../components/LatestDocumentaries";
import AvailablePage from "../components/Available";
import QuestionsPage from "../components/Questions";
import PlatformPage from "../components/Platform.jsx";
import FooterPage from "../components/Footer";
import SubscriptionPage from "../components/Subscription.jsx";
import { useOutletContext } from "react-router-dom";

export default function MainPage() {
  const LoadersData = useOutletContext();
  const categoryData = LoadersData.categoriesData;
  const QuestionData = LoadersData.questionsData;
  console.log("Loaded Categories", categoryData);
  return (
    <div className="  min-w-screen min-h-screen max-w-screen max-h-screen">
      <CategoriesPage categories={categoryData} />
      <DocumentariesPage categories={categoryData} />
      <LatestDocumentariesPage categories={categoryData} />
      <SubscriptionPage />
      <AvailablePage />
      <hr className="border-0 bg-[#817d7d] h-[1px] mx-[50px]" />
      <QuestionsPage QuestionsData={QuestionData} />
      <PlatformPage />
      <FooterPage />
    </div>
  );
}
