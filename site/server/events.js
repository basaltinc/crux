import EventEmitter from 'events';
import util from 'util';

function MyEmitter() {
  EventEmitter.call(this);
}
util.inherits(MyEmitter, EventEmitter);

export const eventNames = {
  PATTERN_CHANGED: 'PATTERN_CHANGED',
};

export default new MyEmitter();
