export default {
  name: "collection",
  title: "Collections",
  type: "document",
  fields: [
    { name: "title", type: "string", validation: (R: any) => R.required() },
    { name: "image", type: "image", options: { hotspot: true } },
    { name: "visible", type: "boolean", initialValue: true },
    { name: "order", type: "number" }
  ]
};
