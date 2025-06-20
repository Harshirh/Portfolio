import { socials } from '../constants/socials';

type SocialLinksProps = {
  size?: 'sm' | 'md' | 'lg';
  className?: string;
};

const SocialLinks = ({ size = 'md', className = '' }: SocialLinksProps) => {
  const containerClasses = {
    sm: 'space-x-3',
    md: 'space-x-4',
    lg: 'space-x-6',
  };

  return (
    <div className={`flex items-center ${containerClasses[size]} ${className}`}>
      {socials.map((social) => (
        <a 
          key={social.name}
          href={social.url}
          target="_blank"
          rel="noopener noreferrer"
          className="text-gray-600 hover:text-blue-600 transition-colors"
          aria-label={social.name}
        >
          <div 
            className={size === 'sm' ? 'w-5 h-5' : size === 'md' ? 'w-6 h-6' : 'w-8 h-8'}
            dangerouslySetInnerHTML={{ __html: social.svg }}
          />
        </a>
      ))}
    </div>
  );
};

export default SocialLinks;