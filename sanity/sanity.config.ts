import { defineConfig } from "sanity";
import { deskTool } from "sanity/desk";
import schemas from "./schemas";
import { deskStructure } from "./structure/deskStructure";

export default defineConfig({
  name: "crochet-studio",
  title: "Crochet Studio CMS",

  projectId: "ouu2o3cw",
  dataset: "production",

  plugins: [
    deskTool({
      structure: deskStructure
    })
  ],

  schema: {
    types: schemas
  }
});
