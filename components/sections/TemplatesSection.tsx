import React from "react";
import SectionHeader from "../SectionHeader";
import TemplateCard from "../TemplateCard";
import { Template } from "../../types";

interface TemplatesSectionProps {
  templates: Template[];
}

const TemplatesSection: React.FC<TemplatesSectionProps> = ({ templates }) => {
  return (
    <section className="mb-32" id="templates">
      <SectionHeader
        number="02"
        title="Templates Profissionais"
        subtitle="Soluções Plug And Play"
        description="Templates premium para o seu negócio. Escolha o modelo ideal e comece a vender hoje mesmo."
        color="purple"
      />

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {templates.map((template, index) => (
          <TemplateCard key={template.id} template={template} index={index} />
        ))}
      </div>
    </section>
  );
};

export default TemplatesSection;
