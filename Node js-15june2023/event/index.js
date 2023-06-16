//  Question -8 

const EventEmitter = require('events');

const eventEmitter = new EventEmitter();

eventEmitter.on('subscribe', (msg) => {
  console.log(msg);
})
eventEmitter.emit('subscribe','College Wallah');



// Question- 9
const Event_Emitter = require('events');

const event_Emitter = new Event_Emitter();


const eventHandler = () => {
  console.log('Event handler called.');
};


event_Emitter.on('myEvent', eventHandler);
event_Emitter.emit('myEvent');


event_Emitter.off('myEvent', eventHandler);

event_Emitter.emit('myEvent');


// Question -10

const Event__Emitter = require('events');


const event__Emitter = new Event__Emitter();


const currentMaxListeners = event__Emitter.getMaxListeners();
console.log('Current maximum number of listeners:', currentMaxListeners);

event__Emitter.setMaxListeners(5);

const updatedMaxListeners = event__Emitter.getMaxListeners();
console.log('Updated maximum number of listeners:', updatedMaxListeners);

