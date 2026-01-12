import './Paper.css';

export const Paper = (props) => {
  const { children, className = '', isInteractive = false } = props;
  const classString = `Paper ${isInteractive ? 'isInteractive' : ''} ${className}`;

  return <div className={classString}>{children}</div>;
};
