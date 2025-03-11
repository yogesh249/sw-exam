function addProperty(property) {
  if (this.properties.some((p) => p.propertyID === property.propertyID)) {
    throw new Error("Property ID must be unique");
  }
  if (
    !property.propertyID ||
    !property.title ||
    !property.description ||
    !property.owner ||
    !property.location ||
    !property.price ||
    !property.status ||
    !property.dateListed ||
    !property.images
  ) {
    throw new Error("Missing required fields");
  }
  this.properties.push(property);
}

function readProperty(propertyID) {
  return (
    this.properties.find((property) => property.propertyID === propertyID) ||
    "Property not found"
  );
}

function updateProperty(propertyID, updatedDetails) {
  const propertyIndex = this.properties.findIndex(
    (p) => p.propertyID === propertyID
  );
  if (propertyIndex === -1) {
    return "Property not found";
  }
  this.properties[propertyIndex] = {
    ...this.properties[propertyIndex],
    ...updatedDetails,
  };
}

function deleteProperty(propertyID) {
  const propertyIndex = this.properties.findIndex(
    (p) => p.propertyID === propertyID
  );
  if (propertyIndex === -1) {
    return "Property not found";
  }
  this.properties.splice(propertyIndex, 1);
}

module.exports = { addProperty, readProperty, updateProperty, deleteProperty };
