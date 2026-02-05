import { Button } from '@/components/ui/button';
import { Download } from 'lucide-react';
import assets from '../../content/assets.json';
import { useStaticAssetAvailability } from '../../hooks/useStaticAssetAvailability';
import { ComponentPropsWithoutRef } from 'react';

type ResumeCTAProps = Omit<ComponentPropsWithoutRef<typeof Button>, 'asChild' | 'onClick' | 'disabled'>;

export function ResumeCta({ variant = 'default', size = 'default', ...props }: ResumeCTAProps) {
  const { isAvailable } = useStaticAssetAvailability(assets.assets.resume.path);

  if (!isAvailable) {
    return (
      <Button variant={variant} size={size} disabled {...props}>
        <Download className="mr-2 h-4 w-4" />
        Resume (Coming Soon)
      </Button>
    );
  }

  return (
    <Button asChild variant={variant} size={size} {...props}>
      <a href={assets.assets.resume.path} target="_blank" rel="noopener noreferrer">
        <Download className="mr-2 h-4 w-4" />
        {assets.assets.resume.label}
      </a>
    </Button>
  );
}
