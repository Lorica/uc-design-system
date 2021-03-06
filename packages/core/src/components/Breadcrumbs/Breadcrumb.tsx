import React from 'react';
import IconChevronLeft from '@usercentric/uc-design-system-icons/lib/interface/IconChevronLeft';
import IconChevronRight from '@usercentric/uc-design-system-icons/lib/interface/IconChevronRight';
import useStyles, { StyleSheet } from '../../hooks/useStyles';
import ButtonOrLink from '../private/ButtonOrLink';
import DirectionalIcon from '../DirectionalIcon';
import { styleSheetBreadcrumb } from './styles';

export type BreadcrumbProps = {
  /** Mark the breadcrumb as disabled. */
  disabled?: boolean;
  /** Hide the breadcrumb icon. */
  hideIcon?: boolean;
  /** Mark the breadcrumb as highlighted. */
  highlighted?: boolean;
  /** Render an anchor link with a URL instead of a button. */
  href?: string;
  /** Pass an HTML element attribute id. */
  id?: string;
  /** Content to within the Breadcrumb. */
  label: string;
  /** Callback fired when the breadcrumb is clicked. */
  onClick?: () => void;
  /** Mark the breadcrumb as selected. */
  selected?: boolean;
  /** A tracking name to identify this component. */
  trackingName?: string;
  /** Custom style sheet. */
  styleSheet?: StyleSheet;
};

/** A single breadcrumb button. Usually rendered amongst a collection of breadcrumbs. */
export default function Breadcrumb({
  disabled,
  hideIcon,
  highlighted,
  href,
  id,
  label,
  onClick,
  selected,
  trackingName,
  styleSheet,
}: BreadcrumbProps) {
  const [styles, cx] = useStyles(styleSheet ?? styleSheetBreadcrumb);
  const clickable = !disabled && (!!href || !!onClick);
  const aria = selected ? { 'aria-current': 'page' } : {};

  const handleClick = () => {
    if (onClick) {
      onClick();
    }
  };

  return (
    <li>
      <ButtonOrLink
        {...aria}
        className={cx(
          styles.breadcrumb,
          clickable && styles.breadcrumb_clickable,
          highlighted && styles.breadcrumb_highlighted,
          clickable && highlighted && styles.breadcrumb_highlighted_clickable,
          selected && styles.breadcrumb_selected,
          disabled && styles.breadcrumb_disabled,
        )}
        afterIcon={
          hideIcon ? null : (
            <DirectionalIcon
              decorative
              direction="right"
              left={IconChevronLeft}
              right={IconChevronRight}
              size={24}
            />
          )
        }
        disabled={disabled}
        href={href}
        trackingName={trackingName}
        id={id}
        onClick={handleClick}
      >
        {label}
      </ButtonOrLink>
    </li>
  );
}
