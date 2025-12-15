export const siteSettingsQuery = `
  *[_type=="siteSettings" && _id=="siteSettings"][0]{
    brandName,
    tagline,
    whatsappNumber
  }
`;
