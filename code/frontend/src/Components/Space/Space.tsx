interface SpaceProps {
    vertical?: boolean;

    horizontal?: boolean;
}
const Space: React.FC<SpaceProps> = (props: SpaceProps) => (
  <div style={{
    width: props.horizontal ? 30 : 0,
    height: props.vertical ? 20 : 0,
  }}
  />
);

export default Space;
