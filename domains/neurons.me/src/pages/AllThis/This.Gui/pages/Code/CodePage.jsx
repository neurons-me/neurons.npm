import { PageTitle, Section, Gridx } from "this.gui";
import { FiTerminal, FiCodepen, FiCpu } from "react-icons/fi";
import { LilBox } from "this.gui";

export default function CodePage() {
  const items = [
    {
      label: "CodeBlock",
      icon: <FiTerminal />,
      href: "/this.GUI/Code/CodeBlock",
    },
    {
      label: "Playground",
      icon: <FiCodepen />,
      href: "/this.GUI/Code/Playground",
    },
    {
      label: "Snippets",
      icon: <FiCpu />,
      href: "/this.GUI/Code/Snippets",
    },
  ];

  return (
    <>
      <PageTitle
        title="Code Components"
        subtitle="Interactive and display components for code representation, live execution, and sharing."
      />
      <Section title="Code Tools and Views">
        <Gridx items={items.map((item) => (
          <LilBox key={item.label} label={item.label} icon={item.icon} href={item.href} />
        ))} />
      </Section>
    </>
  );
}