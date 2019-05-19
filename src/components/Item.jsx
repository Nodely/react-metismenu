/* eslint-disable max-len */
/**
 * src/components/Container.jsx
 * Author: H.Alper Tuna <halpertuna@gmail.com>
 * Date: 16.09.2016
 */

import React from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';
import Container from '../containers/Container';

const Item = ({
  id,
  icon,
  label,
  to,
  path,
  externalLink,
  hasSubMenu,
  active,
  hasActiveChild,
  subMenuVisibility,
  toggleSubMenu,
  activateMe,
  reduxStoreName,
  reduxUid,
}, {
  classStore,
  LinkComponent,
  contextActions,
  renderItem,
}) => (
  <li
    className={classnames(
      classStore.classItem,
      active && classStore.classItemActive,
      hasActiveChild && classStore.classItemHasActiveChild,
      (hasSubMenu && subMenuVisibility) && classStore.classItemHasVisibleChild,
    )}
  >
    <LinkComponent
      className=""
      classNameActive={classStore.classLinkActive}
      classNameHasActiveChild={classStore.classLinkHasActiveChild}
      active={active}
      hasActiveChild={hasActiveChild}
      id={id}
      to={to}
      label={label}
      externalLink={externalLink}
      hasSubMenu={hasSubMenu}
      toggleSubMenu={toggleSubMenu}
      activateMe={activateMe}
      ariaExpanded={hasSubMenu ? subMenuVisibility : null}
    >
      {icon && <i className={classnames(classStore.classIcon, classStore.iconNamePrefix + icon)} />}
      {renderItem ? renderItem(label) : <span className={classnames(classStore.classLink)}>{label}</span>}
      {contextActions && (
        <span className={classStore.classContextActions}>
          {contextActions && contextActions(hasSubMenu, path)}
        </span>
      )}
      {hasSubMenu && <span
        className={classnames(
          classStore.classStateIcon,
          classStore.iconNamePrefix.replace(/fa-/, '') + (
            subMenuVisibility
              ? classStore.iconNameStateVisible
              : classStore.iconNameStateHidden
          ),
        )}
      />}
    </LinkComponent>
    {hasSubMenu && <Container
      itemId={id}
      visible={subMenuVisibility}
      reduxStoreName={reduxStoreName}
      reduxUid={reduxUid}
    />}
  </li>
);

Item.defaultProps = {
  icon: '',
  label: '',
  to: null,
  path: null,
  externalLink: false,
  toggleSubMenu: null,
};

Item.propTypes = {
  id: PropTypes.oneOfType([
    PropTypes.number,
    PropTypes.string,
  ]).isRequired,
  icon: PropTypes.string,
  label: PropTypes.oneOfType([
    PropTypes.element,
    PropTypes.array,
    PropTypes.string,
  ]),
  to: PropTypes.string,
  path: PropTypes.string,
  externalLink: PropTypes.bool,
  hasSubMenu: PropTypes.bool.isRequired,
  active: PropTypes.bool.isRequired,
  hasActiveChild: PropTypes.bool.isRequired,
  subMenuVisibility: PropTypes.bool.isRequired,
  toggleSubMenu: PropTypes.func,
  activateMe: PropTypes.func.isRequired,
  reduxStoreName: PropTypes.string.isRequired,
  reduxUid: PropTypes.number.isRequired,
};

Item.contextTypes = {
  classStore: PropTypes.object.isRequired,
  LinkComponent: PropTypes.oneOfType([
    PropTypes.element,
    PropTypes.func,
  ]).isRequired,
  contextActions: PropTypes.func,
  renderItem: PropTypes.func,
};

export default Item;
