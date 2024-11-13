export default function ErrorBlock(props: { title: string; message: string }) {
  return (
    <div className="error-block">
      <div className="error-block-icon">!</div>
      <div className="error-block-text">
        <h2>{props.title}</h2>
        <p>{props.message}</p>
      </div>
    </div>
  );
}
