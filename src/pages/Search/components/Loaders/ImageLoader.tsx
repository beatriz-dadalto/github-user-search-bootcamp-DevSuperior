import ContentLoader from 'react-content-loader';

const ImageLoader = () => (
  <ContentLoader 
    speed={1}
    width={284}
    height={460}
    viewBox="0 0 284 460"
    backgroundColor="#dedede"
    foregroundColor="#f5f5f5"
  >
    <rect x="19" y="2" rx="2" ry="2" width="284" height="284" /> 
    <rect x="20" y="300" rx="2" ry="2" width="155" height="45" />
  </ContentLoader>
);

export default ImageLoader;
