import { sanity } from "@/lib/sanity.client";
import CollectionsClient from "./CollectionsClient";

export default async function Collections() {
  const collections = await sanity.fetch(`
    *[_type=="collection" && visible==true] | order(order asc){
      _id,
      title,
      "image": image.asset->url
    }
  `);

  return <CollectionsClient collections={collections} />;
}
