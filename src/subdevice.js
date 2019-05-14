
const Model = require('./model');
const Device = require('./device');
const EventEmitter = require('events');

class SubDevice extends Device {
  
  constructor(gateway,config = {}) {
    super(config,gateway._mqttClient);
    this.gateway = gateway;
  }
}
module.exports = SubDevice;