import type { LucideProps } from 'lucide-react';
import type { ReactElement } from 'react';

export interface ISocials {
  icon: ReactElement<
    React.ForwardRefExoticComponent<Omit<LucideProps, 'ref'> & React.RefAttributes<SVGSVGElement>>
  >;
  url: string;
  name: string;
}
