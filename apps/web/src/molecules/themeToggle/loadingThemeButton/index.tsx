import Icon from '@/atoms/icon';

import { themeToggle } from 'theme/recipes';

const LoadingThemeToggle = () => {
  const classes = themeToggle();

  return (
    <div className={classes}>
      <Icon icon='mail' />
    </div>
  );
};

export default LoadingThemeToggle;
