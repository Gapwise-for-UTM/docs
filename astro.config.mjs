import { defineConfig } from "astro/config";
import starlight from "@astrojs/starlight";

export default defineConfig({
  site: "https://docs.gapwise.ca",
  integrations: [
    starlight({
      title: "Gapwise",
      logo: {
        src: "./src/assets/logo-mark.svg",
        replacesTitle: false,
      },
      customCss: ["./src/styles/custom.css"],
      editLink: {
        baseUrl: "https://github.com/Gapwise-for-UTM/docs/edit/main/",
      },
      social: {
        github: "https://github.com/Gapwise-for-UTM",
      },
      sidebar: [
        {
          label: "Start",
          items: [
            { label: "Overview", slug: "index" },
            { label: "Quickstart", slug: "quickstart" },
            { label: "Architecture", slug: "platform/architecture" },
          ],
        },
        {
          label: "SDKs",
          items: [
            { label: "Overview", slug: "sdks/overview" },
            { label: "JavaScript / TypeScript", slug: "sdks/javascript" },
            { label: "Python", slug: "sdks/python" },
          ],
        },
        {
          label: "API",
          items: [
            { label: "Overview", slug: "api/overview" },
            { label: "Buildings", slug: "api/buildings" },
            { label: "Places", slug: "api/places" },
            { label: "Routing", slug: "api/routing" },
            { label: "Gap planning", slug: "api/gap-planning" },
            { label: "Errors", slug: "api/errors" },
          ],
        },
        {
          label: "Guides",
          items: [
            { label: "Use Gapwise with Node", slug: "guides/node" },
            { label: "Use Gapwise with Python", slug: "guides/python" },
            { label: "Defensive API clients", slug: "guides/defensive-clients" },
          ],
        },
        {
          label: "Data",
          items: [
            { label: "Overview", slug: "data/overview" },
            { label: "Provenance", slug: "data/provenance" },
            { label: "Contributing", slug: "data/contributing" },
          ],
        },
        {
          label: "AI & MCP",
          items: [
            { label: "Overview", slug: "ai/overview" },
            { label: "Permissions", slug: "ai/permissions" },
            { label: "MCP tools", slug: "ai/mcp-tools" },
            { label: "OAuth", slug: "ai/oauth" },
            { label: "Client compatibility", slug: "ai/client-compatibility" },
          ],
        },
        {
          label: "Security",
          items: [
            { label: "Overview", slug: "platform/security" },
            { label: "Private cloud", slug: "security/private-cloud" },
            { label: "AI delegation", slug: "security/ai-delegation" },
          ],
        },
        {
          label: "Platform",
          items: [
            { label: "Versioning", slug: "platform/versioning" },
            { label: "Provenance & uncertainty", slug: "platform/provenance" },
            { label: "Changelog", slug: "platform/changelog" },
          ],
        },
      ],
    }),
  ],
});
