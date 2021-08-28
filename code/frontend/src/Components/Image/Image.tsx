interface ImageProps extends React.ImgHTMLAttributes<HTMLImageElement> {}

const Image: React.FC<ImageProps> = (props: ImageProps) => <img alt="" {...props} />;

export default Image;
