export default ({ event, uId }) => (
  <div className="event">
    <div className="eventName">{event.name}</div>
    <div className="uId">{uId}</div>
  </div>
);