import './Animal.css';

export default function Animal(props) {
  const audio = new Audio(`/animals/${props.type}.mp3`);

  const start = () => {
    audio.play();
  };

  return (
    <div className="animal" style={{ top: props.top, left: props.left }}>
      <img src={`/animals/${props.type}.svg`} onClick={start} />
      <h2 className="name">{props.name}</h2>
      <p>{props.says}</p>
    </div>
  );
}
