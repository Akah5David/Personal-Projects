import { useLoaderData } from "react-router-dom";

import CategoriesPage from "../components/Catgories";
import DocumentriesPage from "../components/Documentries";
import LatestDocumentriesPage from "../components/LatestDocumentries";

export default function MainPage() {
  const categories = useLoaderData();
  console.log("Loaded Categories", categories);
  return (
    <div className=" mt-[50px] min-w-screen min-h-screen max-w-screen max-h-screen bg-pink-600">
      <CategoriesPage categories={categories} />
      <DocumentriesPage categories={categories} />
      <LatestDocumentriesPage categories={categories} />
    </div>
  );
}
