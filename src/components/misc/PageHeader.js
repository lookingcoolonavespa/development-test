import TextBlock from './TextBlock';

import '../../stylesheets/PageHeader.css';

const PageHeader = ({ title, description }) => {
  return (
    <div className="flex-centered flex-column page-header">
      <h1>{title}</h1>
      <TextBlock>{description}</TextBlock>
    </div>
  );
};

export default PageHeader;
