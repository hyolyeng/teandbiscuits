import React from 'react';
import Event from '../components/event';
import getEvent from '../lib/get-event';
import setRSVP from '../lib/set-rsvp';
import Head from 'next/head';

export default class extends React.Component {

  static async getInitialProps({ req, query: { id, uId } }) {
    const event = await getEvent(id);
    return { event, id, uId };
  }

  constructor(props) {
    super(props);
    this.state = {};
  }

  rsvp(button) {
    console.log(button.target.value);
    let response = button.target.value ? "attending" : "declined";
    setRSVP(this.props.id, this.props.uId, response);
  }

  render() {
    const { event, uId } = this.props;
    if (!event) {
      return this.errorScreen();
    }

    // first let's find out if the maximum guest is reached
    let attending = 0;
    for (let guestId in event.guests) {
      let guest = event.guests[guestId];
      if (guest.rsvp === "attending") {
        attending += 1;
      }
    }

    let actionButtons = <div className="actions">
        <button value={true} onClick={this.rsvp.bind(this)}>Yes I will attend!</button>
        <button value={false} onClick={this.rsvp.bind(this)}>No I can't make it :(</button>
      </div>;
    if (attending >= event.maximum_guests) {
      actionButtons = <div>Sorry, this event is full! Next time check faster!</div>;
    }

    for (let guestId in event.guests) {
      if (uId == guestId) {
        let guest = event.guests[guestId];
        console.log(guest.name);
        return <div>
          <Head>
            <title>Tea & Biscuits Event Response Page</title>
            <meta charSet='utf-8' />
            <meta name='viewport' content='initial-scale=1.0, width=device-width' />
          </Head>
          <Event event={event} guestName={guest.name} rsvp={guest.rsvp || "Not Yet Replied"} uId={uId} />
          {actionButtons}
        </div>;
      }
    }
    return this.errorScreen();
  }

  errorScreen() {
    // TODO
    return <div> Oops, something went wrong! </div>;
  }
}
