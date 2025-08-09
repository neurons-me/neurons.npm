import { PageTitle, Section, Gridx, LilBox } from "this.gui";
import { FiAlertCircle } from "react-icons/fi";
import { Callout } from "this.gui";
export default function FeedbackPage() {
  const items = [
    {
      label: "Callout",
      icon: <FiAlertCircle />,
      href: "/this.GUI/Feedback/Callout",
    },
  ];

  return (
    <>
      <PageTitle
        title="Feedback Components"
        subtitle="UI elements used to provide visual feedback, alerts, or information to the user."
      />
      <Section title="User Feedback and Alerts Available">
        <Callout variant="info">
          <>
            <div>
              <strong>Callout</strong> is a simple banner used to highlight important messages, warnings or alerts.
            </div>
            <div style={{ marginTop: '0.5rem' }}>
              <a href="/this.GUI/Callout" style={{ textDecoration: 'underline' }}>
                View Callout Component Page →
              </a>
            </div>
          </>
        </Callout>
        <Gridx>
          {items.map((item, index) => (
            <LilBox key={index} {...item} />
          ))}
        </Gridx>
      </Section>
    </>
  );
}