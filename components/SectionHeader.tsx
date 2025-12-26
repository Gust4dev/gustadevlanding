import React from 'react';

interface SectionHeaderProps {
  number: string;
  title: string;
  subtitle: string;
  description: string;
  color: 'blue' | 'purple' | 'emerald';
}

const colors = {
  blue: 'border-blue-600 text-blue-500',
  purple: 'border-purple-600 text-purple-500',
  emerald: 'border-emerald-600 text-emerald-400',
};

const SectionHeader: React.FC<SectionHeaderProps> = ({ number, title, subtitle, description, color }) => {
  return (
    <div className={`mb-16 border-l-4 ${colors[color]} pl-6`}>
      <h2 className={`text-sm font-subtitle ${colors[color].split(' ')[1]} mb-2 uppercase tracking-widest`}>
        {number}. {title}
      </h2>
      <h3 className="text-4xl md:text-5xl font-display font-bold text-white mb-4">{subtitle}</h3>
      <p className="text-gray-400 max-w-xl text-lg leading-relaxed">
        {description}
      </p>
    </div>
  );
};

export default SectionHeader;
