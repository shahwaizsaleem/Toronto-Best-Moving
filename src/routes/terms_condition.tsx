import { createFileRoute } from "@tanstack/react-router";
import { Breadcrumbs } from "@/components/site/Breadcrumbs";
import { termsAndConditions, privacyPolicy } from "@/data/Tc";
import { CtaBand } from "@/components/site/CtaBand";

export const Route = createFileRoute("/terms_condition")({
  component: TermsAndPrivacyPage,
});

function TermsAndPrivacyPage() {
  return (
    <>
      <section className="bg-navy text-navy-foreground">
        <div className="container-page py-14 md:py-20">
          <Breadcrumbs
            invert
            items={[
              { label: "Home", to: "/" },
              { label: "Terms & Conditions & Privacy Policy" },
            ]}
          />

          <h1 className="mt-5 text-4xl md:text-5xl">
            Terms & Conditions & Privacy Policy
          </h1>
        </div>
      </section>

      <main className="container-page py-14 md:py-20">
        <div className="prose-body max-w-4xl">

          <h2>{termsAndConditions.title}</h2>

          {termsAndConditions.sections.map((section) => (
            <section key={section.title} className="mt-8">
              <h3>{section.title}</h3>
              <p>{section.content}</p>
            </section>
          ))}

          <h2 className="mt-16">{privacyPolicy.title}</h2>

          {privacyPolicy.sections.map((section) => (
            <section key={section.title} className="mt-8">
              <h3>{section.title}</h3>
              <p>{section.content}</p>
            </section>
          ))}

        </div>
      </main>
      <CtaBand />
    </>
  );
}