// this.GUI/npm/src/pages/Docs/PageElements/PageImagePage.jsx
import { Typography } from "@mui/material";
import { PageTitle, Section, Gridx, CodeBlock, PageList } from "this.gui";

export default function PageListPage() {
  const gridItems = [
    {
      title: "Purpose",
      content: (
        <Typography variant="body2">
          The <strong>PageList</strong> component provides a consistent way to render
          lists (ordered or unordered) with proper spacing and alignment. It also
          supports secondary text for detailed descriptions.
        </Typography>
      ),
      xs: 12,
      md: 12,
    },
    {
      title: "Props",
      content: (
        <ul style={{ paddingLeft: "1.2rem" }}>
          <li>
            <strong>items</strong>: An array of strings or objects. Objects can include{" "}
            <code>{`{ primary, secondary }`}</code>.
          </li>
          <li>
            <strong>type</strong>: Determines list style. Accepts{" "}
            <code>"unordered"</code> (default) or <code>"ordered"</code>.
          </li>
          <li>
            <strong>dense</strong>: Reduces vertical spacing between items. Default:{" "}
            <code>false</code>.
          </li>
        </ul>
      ),
      xs: 12,
      md: 12,
    },
    {
      title: "Usage Example",
      content: (
        <CodeBlock language="jsx">
{`import PageList from "../../components/Pages/PageList";

// Simple unordered list:
<PageList items={["Item One", "Item Two", "Item Three"]} />

// Ordered list with secondary text:
<PageList
  type="ordered"
  items={[
    { primary: "Step One", secondary: "Do this first" },
    { primary: "Step Two", secondary: "Then do this" }
  ]}
/ >

// Dense unordered list:
<PageList dense items={["Compact Item 1", "Compact Item 2"]} />`}
        </CodeBlock>
      ),
      xs: 12,
      md: 12,
    },
    {
      title: "Live Example",
      content: (
        <PageList
          type="ordered"
          items={[
            { primary: "Step One", secondary: "This is the first step." },
            { primary: "Step Two", secondary: "Proceed with this action." },
            "Final Step",
          ]}
        />
      ),
      xs: 12,
      md: 12,
    },
  ];

  return (
    <>
      <PageTitle
        title="PageList"
        subtitle="A standardized list component supporting ordered, unordered, and dense lists."
      />
      <Section title="Overview">
        <Typography variant="body1" sx={{ mb: 2 }}>
          The <strong>PageList</strong> component is ideal for rendering structured
          information, steps, or bullet points in a clean and consistent way across
          pages.
        </Typography>
        <Gridx items={gridItems} />
      </Section>
    </>
  );
}