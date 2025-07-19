import { useLoaderData } from "react-router-dom";

import CategoriesPage from "../components/Categories";
import DocumentriesPage from "../components/Documentries";
import LatestDocumentriesPage from "../components/LatestDocumentries";
import AvailablePage from "../components/Available";
export default function MainPage() {
  const categories = useLoaderData();
  console.log("Loaded Categories", categories);
  return (
    <div className=" mt-[50px] min-w-screen min-h-screen max-w-screen max-h-screen">
      <CategoriesPage categories={categories} />
      <DocumentriesPage categories={categories} />
      <LatestDocumentriesPage categories={categories} />
      <AvailablePage />
    </div>
  );
}
