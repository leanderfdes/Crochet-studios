export default {
  name: "siteSettings",
  title: "Site Settings",
  type: "document",

  fields: [
    /* =========================
       BRAND IDENTITY
    ========================= */

    {
      name: "brandName",
      title: "Brand Name",
      type: "string",
      validation: (R: any) => R.required()
    },
    {
      name: "tagline",
      title: "Tagline",
      type: "string",
      description: "Short poetic line shown on the hero section"
    },

    /* =========================
       CONTACT
    ========================= */

    {
      name: "whatsappNumber",
      title: "WhatsApp Number",
      type: "string",
      description:
        "Include country code, no + sign. Example: 919999999999",
      validation: (R: any) =>
        R.regex(/^\d+$/, {
          name: "numbers only",
          invert: false
        })
    },

    /* =========================
       SEO METADATA
    ========================= */

    {
      name: "seoTitle",
      title: "SEO Title",
      type: "string",
      description:
        "Title shown in Google search results and browser tab"
    },
    {
      name: "seoDescription",
      title: "SEO Description",
      type: "text",
      rows: 3,
      description:
        "Short description for search engines (150–160 characters ideal)"
    },
    {
      name: "seoImage",
      title: "SEO / Open Graph Image",
      type: "image",
      description:
        "Used when sharing the site on WhatsApp, Instagram, Facebook (1200×630 recommended)",
      options: {
        hotspot: true
      }
    }
  ],

  preview: {
    prepare() {
      return {
        title: "Global Site Settings"
      };
    }
  }
};
