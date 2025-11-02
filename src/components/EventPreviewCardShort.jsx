import "../assets/styles/eventCard.css";

export default function EventPreviewCardShort({ name, image }) {
  return (
    <div className="event-card">
      <img src={image} alt={name} />
    </div>
  );
}
