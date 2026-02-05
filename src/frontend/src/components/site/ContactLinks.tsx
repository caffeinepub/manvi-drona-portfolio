import { Button } from '@/components/ui/button';
import { Mail } from 'lucide-react';
import { SiLinkedin } from 'react-icons/si';
import contactInfo from '../../content/contact.json';
import { ResumeCta } from './ResumeCta';

export function ContactLinks() {
  return (
    <div className="flex flex-wrap justify-center gap-4">
      <Button asChild size="lg">
        <a href={contactInfo.contactInfo.email} target="_blank" rel="noopener noreferrer">
          <Mail className="mr-2 h-4 w-4" />
          Contact
        </a>
      </Button>
      <ResumeCta variant="outline" size="lg" />
      <Button asChild variant="outline" size="lg">
        <a href={contactInfo.contactInfo.linkedin} target="_blank" rel="noopener noreferrer">
          <SiLinkedin className="mr-2 h-4 w-4" />
          LinkedIn
        </a>
      </Button>
    </div>
  );
}
