function getConfiguration(config) 
{ 
	config.addressLabel = {en: "DevEUI", es: "DevEUI"};
}

function getEndpoints(deviceAddress, endpoints)
{
  var e = endpoints.addEndpoint("1", "Battery Voltage", endpointType.genericSensor);
  e.variableTypeId = 1021;
  var e = endpoints.addEndpoint("2", "Cumulative Flow", endpointType.genericSensor);
  e.variableTypeId = 1022;
  var e = endpoints.addEndpoint("3", "Meter Number", endpointType.genericSensor);
  e.variableTypeId = 1023;
  var e = endpoints.addEndpoint("4", "Packet Number", endpointType.genericSensor);
  e.variableTypeId = 1024;
  var e = endpoints.addEndpoint("5", "Pulse Constant", endpointType.genericSensor);
  e.variableTypeId = 1025;
  var e = endpoints.addEndpoint("6", "Status", endpointType.genericSensor);
  e.accessType = endpointAccessType.readWrite;
  e.variableTypeId = 1026;
}

function validateDeviceAddress(address, result)
{
  if (address.length != 16) {
    result.ok = false;
    result.errorMessage = {
      en: "The address must be 16 characters long.", 
      es: "La dirección debe tener exactamente 16 caracteres."
    };
  }
}

function updateDeviceUIRules(device, rules)
{
  rules.canCreateEndpoints = false;
}

function updateEndpointUIRules(endpoint, rules)
{
  rules.canDelete = false;
  rules.canEditSubtype = false;
}
