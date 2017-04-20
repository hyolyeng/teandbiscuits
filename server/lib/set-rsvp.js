import db from './db';

export default async (eventId, guestId, rsvp) => {
	let guestRef = await db.child('events').child(eventId).child('guests').child(guestId);
  let guest = await guestRef.once('value');
  let g = guest.val();
  g.rsvp= rsvp;
  guestRef.set(g);
};