import type { FC } from 'react';
import type { ClassStyles } from 'types/global';

const Logo: FC<ClassStyles> = ({ className }) => (
  <svg width="39" height="40" viewBox="0 0 39 40" fill="none" xmlns="http://www.w3.org/2000/svg" className={className}>
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M10 0.5C4.47715 0.5 0 4.97715 0 10.5V29.5C0 35.0228 4.47715 39.5 10 39.5H37C38.1046 39.5 39 38.6046 39 37.5V2.5C39 1.39543 38.1046 0.5 37 0.5H10ZM18.6905 23.373C17.8293 24.9904 16.2032 25.77 13.88 25.77C10.334 25.77 8.37196 24.078 8.20996 20.442V20.118H11.72V20.352C11.828 21.882 12.422 22.71 13.79 22.71C15.284 22.71 15.986 21.702 15.986 19.632V18.516C15.986 16.338 15.302 15.294 13.79 15.294C12.404 15.294 11.828 16.068 11.738 17.562V17.76H8.26396V17.364C8.44396 13.98 10.424 12.342 13.79 12.342C16.8095 12.342 18.8571 13.8555 19.3108 16.9312C20.2176 15.1982 21.9389 14.342 24.21 14.342C27.576 14.342 29.556 15.98 29.736 19.364V19.76H26.262V19.562C26.172 18.068 25.596 17.294 24.21 17.294C22.698 17.294 22.014 18.338 22.014 20.516V21.632C22.014 23.702 22.716 24.71 24.21 24.71C25.578 24.71 26.172 23.882 26.28 22.352V22.118H29.79V22.442C29.628 26.078 27.666 27.77 24.12 27.77C20.9866 27.77 19.1213 26.3518 18.6905 23.373Z"
    />
  </svg>
);

export default Logo;
