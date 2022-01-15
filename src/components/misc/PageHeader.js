import TextBlock from './TextBlock';

const PageHeader = ({ title, description }) => {
  return (
    <div>
      <h1>{title}</h1>
      <TextBlock>{description}</TextBlock>
    </div>
  );
};

export default PageHeader;
