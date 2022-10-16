import React, { ReactNode } from 'react';
import Link, { LinkProps } from 'next/link';
import { ColorType } from '../../../assets/theme/theme';
import { LinkStyled } from '../../atoms/link';

interface Props extends LinkProps {
  children: ReactNode;
  className?: string;
  color?: ColorType;
  hover?: ColorType;
  style?: React.CSSProperties;
  bg?: ColorType;
}

function NextLink({
  href,
  className,
  children,
  color,
  hover,
  style,
  bg,
  ...props
}: Props) {
  return (
    <Link href={href} {...props}>
      <LinkStyled
        bg={bg}
        color={color || 'compliment'}
        hover={hover}
        className={className}
        style={style}
      >
        {children}
      </LinkStyled>
    </Link>
  );
}

export default NextLink;
