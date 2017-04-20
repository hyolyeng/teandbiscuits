export default ({ event, guestName, rsvp, uId }) => (
  <div className="event">
    <p>Hi {guestName}!</p>
    <p>{"Diana"} has invited you to her event:</p>
    <p>{event.name}</p>
    <p>Place: {event.place}</p>
    <p>Your response: {rsvp}</p>
  </div>
);