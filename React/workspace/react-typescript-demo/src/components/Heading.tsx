type HeadingPropsType = {
  children: string;
};
function Heading(props: HeadingPropsType) {
  const { children } = props;
  return (
    <div className="heading__container">
      <h2>{children}</h2>
    </div>
  );
}

export default Heading;
