var events = require('events');
var eventEmiter = new events.EventEmitter();

var myEventHandler = function(){
    console.log('Cujem vrisak!');
}
eventEmiter.on('vrisak', myEventHandler);
eventEmiter.emit('vrisak');