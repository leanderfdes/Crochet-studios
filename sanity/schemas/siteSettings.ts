export default {
  name: "siteSettings",
  title: "Site Settings",
  type: "document",
  fields: [
    {
      name: "brandName",
      type: "string",
      validation: (R: any) => R.required()
    },
    {
      name: "tagline",
      type: "string"
    },
    {
      name: "whatsappNumber",
      title: "WhatsApp Number",
      type: "string",
      description: "Include country code, no + sign. Example: 919999999999",
      validation: (R: any) =>
        R.regex(/^\d+$/, {
          name: "numbers only",
          invert: false
        })
    }
  ]
};
