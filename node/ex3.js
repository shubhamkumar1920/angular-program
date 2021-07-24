var events=require('events');
var eventEmitter=new events.EventEmitter();
eventEmitter.on('clicked',function(button){
    console.log(button+'is clicked');
})
eventEmitter.emit('clicked','button 1');
eventEmitter.emit('clicked','button 2');

var node1=function node1(){
    console.log('we are learnimg node js');
}
var node2=function node2(){
    console.log('we will learn express js also');
}
eventEmitter.addListener('learn',node1);
eventEmitter.on('learn',node2);
eventEmitter.emit('learn');
var listencount=events.EventEmitter.listenerCount(eventEmitter,'learn');
console.log(listencount+" listeners listening to learn event");
eventEmitter.removeListener('learn',node1);
eventEmitter.emit('learn');
var listencount=events.EventEmitter.listenerCount(eventEmitter,'learn');
console.log(listencount+" listners listening to learn event");
