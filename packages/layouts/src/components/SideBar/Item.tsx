import React from 'react';
import useStyles, { StyleSheet } from '@usercentric/uc-design-system/lib/hooks/useStyles';
import ButtonOrLink, {
  ButtonOrLinkTypes,
} from '@usercentric/uc-design-system/lib/components/private/ButtonOrLink';
import iconComponent from '@usercentric/uc-design-system/lib/prop-types/iconComponent';
import Text from '@usercentric/uc-design-system/lib/components/Text';
import { styleSheetItem } from './styles';

export type SideBarItemProps = {
  /** Mark the item as active. */
  active?: boolean;
  /** Render as an anchor link with a URL. */
  href?: string;
  /** Icon to display above the label. */
  icon: NonNullable<React.ReactElement<{ size?: string }>>;
  /** Item label. */
  label?: React.ReactNode;
  /** Callback fired when the element is clicked. */
  onClick?: (event: React.MouseEvent<ButtonOrLinkTypes>) => void;
  /** Custom style sheet. */
  styleSheet?: StyleSheet;
};

/** A clickable item within the sidebar navigation menu. */
function SideBarItem({ active, label, href, icon, onClick, styleSheet }: SideBarItemProps) {
  const [styles, cx] = useStyles(styleSheet ?? styleSheetItem);

  return (
    <li role="none">
      <ButtonOrLink
        role="menuitem"
        href={href}
        className={cx(styles.item, active && styles.item_active)}
        onClick={onClick}
      >
        <span className={cx(styles.icon)}>{React.cloneElement(icon, { size: '2em' })}</span>

        {label && (
          <span className={cx(styles.label)}>
            <Text micro bold uppercased inverted>
              {label}
            </Text>
          </span>
        )}
      </ButtonOrLink>
    </li>
  );
}

SideBarItem.propTypes = {
  icon: iconComponent.isRequired,
};

export default SideBarItem;
