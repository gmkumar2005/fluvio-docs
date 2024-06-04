import type { SidebarsConfig, PropSidebarItemHtml } from "@docusaurus/plugin-content-docs";

const makeApiClientLink = ({
  name,
  href,
  icon,
}: {
  name: string;
  href: string;
  icon: string;
}): PropSidebarItemHtml => {
  const value = `
    <li class="theme-doc-sidebar-item-link theme-doc-sidebar-item-link-level-1 menu__list-item">
      <a class="menu__link" style="display: flex; justify-content: flex-start; align-items: center;" aria-current="page" href="${href}" target="_blank">
        <img src="${icon}" alt="${name} logo" height="21px" width="21px" />
        <span style="padding-left: 8px;">${name}</span>
        <svg width="13.5" height="13.5" aria-hidden="true" viewBox="0 0 24 24" class="iconExternalLink_node_modules-@docusaurus-theme-classic-lib-theme-Icon-ExternalLink-styles-module"><path fill="currentColor" d="M21 13v10h-21v-19h12v2h-10v15h17v-8h2zm3-12h-10.988l4.035 4-6.977 7.07 2.828 2.828 6.977-7.07 4.125 4.172v-11z"></path></svg>
      </a>
    </li>`;

  return {
    type: 'html',
    value,
  };
}

/**
 * Creating a sidebar enables you to:
 - create an ordered group of docs
 - render a sidebar for each doc of that group
 - provide next/previous navigation

 The sidebars can be generated from the filesystem, or explicitly defined here.

 Create as many sidebars as you want.
 */
const sidebars: SidebarsConfig = {
  fluvio: [
    {
      type: "autogenerated",
      dirName: "fluvio",
    },
  ],
  sdf: [
    {
      type: "autogenerated",
      dirName: "sdf",
    },
  ],
  apis: [
    {
      type: "autogenerated",
      dirName: "apis",
    },
    makeApiClientLink({
      name: 'Rust SDK',
      href: 'https://docs.rs/fluvio/latest/fluvio/',
      icon: '/img/docs/sdk/rust.svg',
    }),
    makeApiClientLink({
      name: 'Python SDK',
      href: 'https://infinyon.github.io/fluvio-client-python/fluvio.html',
      icon: '/img/docs/sdk/python.svg',
    }),
    makeApiClientLink({
      name: 'NodeJS SDK',
      href: 'https://infinyon.github.io/fluvio-client-node/',
      icon: '/img/docs/sdk/nodejs.svg',
    }),
  ]
};

export default sidebars;
