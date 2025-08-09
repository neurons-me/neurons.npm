const GUI_Drawer_Data = {
  title: "Components",
  items: [
    {
      label: "AppBars",
      icon: "Navigation",
      children: [
        { label: "Footer", href: "/this.GUI" },
        { label: "NavBar", href: "/this.GUI" },
        { label: "RightContextDrawer", href: "/this.GUI" },
        { label: "TopBarAndSideBar", href: "/this.GUI/TopAndSideBar" },
      ],
    },
    {
      label: "Buttons",
      icon: "Box",
      children: [],
    },
    {
      label: "Cards",
      icon: "Layers",
      children: [
        { label: "ModuleCard", href: "/this.GUI/ModuleCard" },
        { label: "LilBox", href: "/this.GUI/LilBox" },
      ],
    },
    {
      label: "Code",
      icon: "Code",
      children: [
        { label: "CodeBlock", href: "/this.GUI/CodeBlock" },
      ],
    },
    {
      label: "Feedback",
      icon: "MessageCircle",
      children: [
        { label: "Callout", href: "/this.GUI" },
      ],
    },
    {
      label: "Media",
      icon: "Image",
      children: [
        { label: "PageEmbed", href: "/this.GUI/PageEmbed" },
        { label: "PageImage", href: "/this.GUI/PageImage" },
      ],
    },
    {
      label: "Organization",
      icon: "List",
      children: [
        { label: "TableOfContents", href: "/this.GUI/TableOfContents" },
        { label: "Tabs", href: "/this.GUI/Tabs" },
      ],
    },
    {
      label: "Text",
      icon: "Type",
      children: [
        { label: "PageList", href: "/this.GUI/PageList" },
        { label: "PageParagraph", href: "/this.GUI/PageParagraph" },
        { label: "PageTitle", href: "/this.GUI/PageTitle" },
        { label: "Quote", href: "/this.GUI" },
      ],
    },
    { type: 'label', label: 'Layout' },
    {
      label: "Layout",
      icon: "Grid",
      children: [
        { label: "Container", href: "/this.GUI/Containers" },
        { label: "GridX", href: "/this.GUI/Grid" },
        { label: "PageDivider", href: "/this.GUI/PageDivider" },
        { label: "Section", href: "/this.GUI/Section" },
      ],
    }
  ],
};

export default GUI_Drawer_Data;