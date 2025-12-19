export default {
  name: "collection",
  title: "Collections",
  type: "document",
  fields: [
    {
      name: "title",
      type: "string",
      validation: (R: any) => R.required()
    },

    // 👇 NEW (gallery support)
    {
      name: "images",
      title: "Images",
      type: "array",
      of: [{ type: "image", options: { hotspot: true } }]
    },

    // 👇 KEEP (for backward compatibility)
    {
      name: "image",
      title: "Primary Image (legacy)",
      type: "image",
      options: { hotspot: true }
    },

    // 👇 NEW (modal content)
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

    {
      name: "visible",
      type: "boolean",
      initialValue: true
    },

    {
      name: "order",
      type: "number"
    }
  ]
};
