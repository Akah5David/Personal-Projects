import { useLoaderData } from "react-router-dom";

import CategoriesPage from "../components/Catgories";
import DocumentriesPage from "../components/Documentries";
import LatestDocumentriesPage from "../components/LatestDocumentries";

export default function MainPage() {
  const categories = useLoaderData();
  console.log("Loaded Categories", categories);
  return (
    <main className="pl-[45px] w-screen h-screen">
      <CategoriesPage categories={categories} />
      <DocumentriesPage categories={categories} />
      <LatestDocumentriesPage categories={categories} />
    </main>
  );
}
