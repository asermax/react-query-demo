import classNames from "classnames"

export const Avatar = ({ className }) => (
  <img src="/images/avatar.jpg" alt="avatar" className={classNames("rounded-full rounded-full ring-2 ring-offset-2 ring-blue", className) } />
);
