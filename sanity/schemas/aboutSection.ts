export default {
  name: "aboutSection",
  title: "About Section",
  type: "document",
  __experimental_actions: ["update", "publish"], // ⛔ prevents delete & create
  fields: [
    {
      name: "title",
      title: "Section Title",
      type: "string",
      initialValue: "About the Studio",
      validation: (R: any) => R.required()
    },
    {
      name: "content",
      title: "Story",
      type: "array",
      of: [{ type: "block" }],
      validation: (R: any) => R.required()
    },
    {
      name: "image",
      title: "About Image",
      type: "image",
      options: { hotspot: true }
    },
    {
      name: "visible",
      title: "Visible",
      type: "boolean",
      initialValue: true
    }
  ]
};
