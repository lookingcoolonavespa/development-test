import TextBlock from './TextBlock';

const LoadingScreen = ({ isLoading }) => {
  const visibilityClass = isLoading ? '' : 'inactive';
  return (
    <div className={`loading_screen flex-centered ${visibilityClass}`}>
      <TextBlock>Loading...</TextBlock>
    </div>
  );
};

export default LoadingScreen;
