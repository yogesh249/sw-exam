/**
 * Adds a property to the properties array.
 * @param {Object} property - The property object to add.
 * @throws Will throw an error if the property ID is not unique or if required fields are missing.
 */
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

/**
 * Reads a property by its ID.
 * @param {string} propertyID - The ID of the property to read.
 * @returns {Object|string} The property object if found, otherwise "Property not found".
 */
function readProperty(propertyID) {
  return (
    this.properties.find((property) => property.propertyID === propertyID) ||
    "Property not found"
  );
}

/**
 * Updates a property by its ID.
 * @param {string} propertyID - The ID of the property to update.
 * @param {Object} updatedDetails - The updated details of the property.
 * @returns {string|undefined} "Property not found" if the property does not exist, otherwise undefined.
 */
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

/**
 * Deletes a property by its ID.
 * @param {string} propertyID - The ID of the property to delete.
 * @returns {string|undefined} "Property not found" if the property does not exist, otherwise undefined.
 */
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
