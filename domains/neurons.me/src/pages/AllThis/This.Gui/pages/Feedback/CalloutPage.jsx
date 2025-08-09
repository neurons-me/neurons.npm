import { PageTitle, Section, Gridx, CodeBlock } from "this.gui";
import { Typography } from "@mui/material";

export default function CalloutPage() {
  const gridItems = [
    {
      title: "What is Callout?",
      content: (
        <Typography variant="body2" sx={{ mb: 1 }}>
          The <code>Callout</code> component is used to highlight important information such as warnings, success messages, or general information. It adapts its styles based on the selected <code>variant</code> and the current theme mode (light or dark).
        </Typography>
      ),
      xs: 12,
      md: 12,
    },
    {
      title: "Supported Variants",
      content: (
        <Typography variant="body2">
          The component supports the following <code>variant</code> values:
          <ul>
            <li><strong>warning</strong> – used for cautionary messages</li>
            <li><strong>info</strong> – used for neutral or informational content</li>
            <li><strong>success</strong> – used to show positive confirmations</li>
          </ul>
          Each variant has different color schemes for light and dark modes.
        </Typography>
      ),
      xs: 12,
      md: 12,
    },
    {
      title: "Usage Example",
      content: (
        <CodeBlock language="jsx">
{`<Callout variant="info">
  This is an informational message.
</Callout>`}
        </CodeBlock>
      ),
      xs: 12,
      md: 12,
    },
    {
      title: "Default Props and Styling",
      content: (
        <>
          <Typography variant="body2" sx={{ mb: 1 }}>
            If no <code>variant</code> is provided, the component defaults to <code>"warning"</code>. It also includes responsive styles like padding, border, color, and font adjustments for better emphasis and readability.
          </Typography>
          <CodeBlock language="jsx">
{`<Callout>
  This repository is in continuous development and may be unstable.
</Callout>`}
          </CodeBlock>
        </>
      ),
      xs: 12,
      md: 12,
    },
  ];

  return (
    <>
      <PageTitle
        title="Callout"
        subtitle="Highlight important content with visual emphasis."
      />
      <Section title="Overview">
        <Gridx items={gridItems} />
      </Section>
    </>
  );
}
