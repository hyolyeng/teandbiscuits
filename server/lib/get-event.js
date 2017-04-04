import db from './db';

export default async (id) => {
	const event = await db
    .child('events')
    .child(id)
    .once('value');
  const val = event.val();
  console.log(event);
  console.log("*****");
  console.log(event.val());
  if (val) {
    return transform(val);
  } else {
    return null;
  }
};

export function transform(val) {
  return {
    id: val.id,
    name: val.name,
    maximum_guests: val.maximum_guests,
    minimum_guests: val.minimum_guests,
    place: val.place,
    time: new Date(val.time * 1000),
    guests: val.guests
  };
};