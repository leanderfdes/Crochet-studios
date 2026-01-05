export default {
  name: "collection",
  title: "Collections",
  type: "document",

  fields: [
    /* =========================
       BASIC INFO
    ========================= */

    {
      name: "title",
      title: "Title",
      type: "string",
      validation: (R: any) => R.required()
    },

    /* =========================
       CATEGORY (NEW)
    ========================= */

    {
      name: "category",
      title: "Category",
      type: "string",
      options: {
        list: [
          { title: "Bags", value: "bags" },
          { title: "Clothing", value: "clothing" },
          { title: "Home Décor", value: "homeDecor" },
          { title: "Custom Orders", value: "customOrders" }
        ],
        layout: "radio"
      },
      validation: (R: any) => R.required()
    },

    /* =========================
       IMAGES
    ========================= */

    {
      name: "images",
      title: "Images",
      type: "array",
      of: [{ type: "image", options: { hotspot: true } }]
    },

    // 👇 KEEP (legacy support, optional)
    {
      name: "image",
      title: "Primary Image (legacy)",
      type: "image",
      options: { hotspot: true }
    },

    /* =========================
       MODAL CONTENT
    ========================= */

    {
      name: "description",
      title: "Description",
      type: "array",
      of: [{ type: "block" }]
    },

    {
      name: "customNote",
      title: "Customization Note",
      type: "string"
    },

    /* =========================
       VISIBILITY & ORDER
    ========================= */

    {
      name: "visible",
      title: "Visible",
      type: "boolean",
      initialValue: true
    },

    {
      name: "order",
      title: "Display Order",
      type: "number",
      description: "Lower numbers appear first"
    }
  ]
};
