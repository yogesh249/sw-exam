const {
  addProperty,
  readProperty,
  updateProperty,
  deleteProperty,
} = require('./PropertyManagement.lib.js');

describe('PropertyManagement', () => {
  let properties;

  beforeEach(() => {
    properties = [];
  });

  test('should add a property', () => {
    const property = {
      propertyID: '1',
      title: 'Property1',
      description: 'Description1',
      owner: 'Owner1',
      location: 'Location1',
      price: 1000,
      status: 'Available',
      dateListed: '2025-03-11',
      images: ['image1.jpg'],
    };
    addProperty.call({ properties }, property);
    expect(properties).toContain(property);
  });

  test('should throw error when adding property with duplicate ID', () => {
    const property = {
      propertyID: '1',
      title: 'Property1',
      description: 'Description1',
      owner: 'Owner1',
      location: 'Location1',
      price: 1000,
      status: 'Available',
      dateListed: '2025-03-11',
      images: ['image1.jpg'],
    };
    addProperty.call({ properties }, property);
    expect(() => addProperty.call({ properties }, property)).toThrow(
      'Property ID must be unique'
    );
  });

  test('should throw error when adding property with missing fields', () => {
    const property = {
      propertyID: '1',
      title: 'Property1',
      description: 'Description1',
      owner: 'Owner1',
      location: 'Location1',
      price: 1000,
      status: 'Available',
      dateListed: '2025-03-11',
    };
    expect(() => addProperty.call({ properties }, property)).toThrow(
      'Missing required fields'
    );
  });

  test('should read a property by ID', () => {
    const property = {
      propertyID: '1',
      title: 'Property1',
      description: 'Description1',
      owner: 'Owner1',
      location: 'Location1',
      price: 1000,
      status: 'Available',
      dateListed: '2025-03-11',
      images: ['image1.jpg'],
    };
    addProperty.call({ properties }, property);
    expect(readProperty.call({ properties }, '1')).toBe(property);
  });

  test('should return "Property not found" for non-existent property ID', () => {
    expect(readProperty.call({ properties }, '999')).toBe('Property not found');
  });

  test('should update a property by ID', () => {
    const property = {
      propertyID: '1',
      title: 'Property1',
      description: 'Description1',
      owner: 'Owner1',
      location: 'Location1',
      price: 1000,
      status: 'Available',
      dateListed: '2025-03-11',
      images: ['image1.jpg'],
    };
    addProperty.call({ properties }, property);
    const updatedDetails = { price: 2000 };
    updateProperty.call({ properties }, '1', updatedDetails);
    expect(properties[0].price).toBe(2000);
  });

  test('should return "Property not found" when updating non-existent property', () => {
    const updatedDetails = { price: 2000 };
    expect(updateProperty.call({ properties }, '999', updatedDetails)).toBe(
      'Property not found'
    );
  });

  test('should delete a property by ID', () => {
    const property = {
      propertyID: '1',
      title: 'Property1',
      description: 'Description1',
      owner: 'Owner1',
      location: 'Location1',
      price: 1000,
      status: 'Available',
      dateListed: '2025-03-11',
      images: ['image1.jpg'],
    };
    addProperty.call({ properties }, property);
    deleteProperty.call({ properties }, '1');
    expect(properties).not.toContain(property);
  });

  test('should return "Property not found" when deleting non-existent property', () => {
    expect(deleteProperty.call({ properties }, '999')).toBe('Property not found');
  });
});
