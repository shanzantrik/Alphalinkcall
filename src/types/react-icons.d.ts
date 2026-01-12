declare module 'react-icons/fa' {
  import { FC } from 'react';

  export interface IconBaseProps {
    className?: string;
    size?: string | number;
    color?: string;
    title?: string;
  }

  export const FaPhoneAlt: FC<IconBaseProps>;
  export const FaComments: FC<IconBaseProps>;
  export const FaHeadset: FC<IconBaseProps>;
  export const FaEnvelope: FC<IconBaseProps>;
  export const FaRegSmile: FC<IconBaseProps>;
  export const FaRegClock: FC<IconBaseProps>;
  export const FaRegCheckCircle: FC<IconBaseProps>;
  export const FaRegListAlt: FC<IconBaseProps>;
  export const FaWhatsapp: FC<IconBaseProps>;
}
