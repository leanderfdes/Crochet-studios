import { StructureBuilder } from "sanity/desk";

export const deskStructure = (S: StructureBuilder) =>
  S.list()
    .title("Content")
    .items([
      // 🔒 Singleton: Site Settings
      S.listItem()
        .title("Site Settings")
        .icon(() => "⚙️")
        .child(
          S.document()
            .schemaType("siteSettings")
            .documentId("siteSettings")
        ),

      S.divider(),

      // Normal collections
      S.documentTypeListItem("collection").title("Collections"),
      S.documentTypeListItem("order").title("Recent Orders")
    ]);
