// import PropertyManagement from './PropertyManagement.lib';

import { PropertyManagement } from "./PropertyManagement.lib";

describe('PropertyManagement', () => {
  let propertyManagement;

  beforeEach(() => {
    propertyManagement = new PropertyManagement();
  });

  test('should add a property successfully', () => {
    const property = {
      propertyID: '1',
      title: 'Test Property',
      description: 'A beautiful property',
      owner: 'John Doe',
      location: '123 Main St',
      price: 100000,
      status: 'available',
      dateListed: '2023-01-01',
      images: ['image1.jpg']
    };
    propertyManagement.addProperty(property);
    expect(propertyManagement.properties.length).toBe(1);
    expect(propertyManagement.properties[0]).toEqual(property);
  });

  test('should throw an error if property ID is not unique', () => {
    const property = {
      propertyID: '1',
      title: 'Test Property',
      description: 'A beautiful property',
      owner: 'John Doe',
      location: '123 Main St',
      price: 100000,
      status: 'available',
      dateListed: '2023-01-01',
      images: ['image1.jpg']
    };
    propertyManagement.addProperty(property);
    expect(() => propertyManagement.addProperty(property)).toThrow('Property ID must be unique');
  });

  test('should throw an error if required fields are missing', () => {
    const property = {
      propertyID: '1',
      title: 'Test Property',
      description: 'A beautiful property',
      owner: 'John Doe',
      location: '123 Main St',
      price: 100000,
      status: 'available',
      dateListed: '2023-01-01'
      // Missing images field
    };
    expect(() => propertyManagement.addProperty(property)).toThrow('Missing required fields');
  });

  test('should read a property successfully', () => {
    const property = {
      propertyID: '1',
      title: 'Test Property',
      description: 'A beautiful property',
      owner: 'John Doe',
      location: '123 Main St',
      price: 100000,
      status: 'available',
      dateListed: '2023-01-01',
      images: ['image1.jpg']
    };
    propertyManagement.addProperty(property);
    const readProperty = propertyManagement.readProperty('1');
    expect(readProperty).toEqual(property);
  });

  test('should return "Property not found" if property does not exist', () => {
    const result = propertyManagement.readProperty('999');
    expect(result).toBe('Property not found');
  });

  test('should update a property successfully', () => {
    const property = {
      propertyID: '1',
      title: 'Test Property',
      description: 'A beautiful property',
      owner: 'John Doe',
      location: '123 Main St',
      price: 100000,
      status: 'available',
      dateListed: '2023-01-01',
      images: ['image1.jpg']
    };
    propertyManagement.addProperty(property);
    const updatedDetails = { title: 'Updated Property' };
    propertyManagement.updateProperty('1', updatedDetails);
    expect(propertyManagement.properties[0].title).toBe('Updated Property');
  });

  test('should return "Property not found" if trying to update a non-existent property', () => {
    const result = propertyManagement.updateProperty('999', { title: 'Updated Property' });
    expect(result).toBe('Property not found');
  });

  test('should delete a property successfully', () => {
    const property = {
      propertyID: '1',
      title: 'Test Property',
      description: 'A beautiful property',
      owner: 'John Doe',
      location: '123 Main St',
      price: 100000,
      status: 'available',
      dateListed: '2023-01-01',
      images: ['image1.jpg']
    };
    propertyManagement.addProperty(property);
    propertyManagement.deleteProperty('1');
    expect(propertyManagement.properties.length).toBe(0);
  });

  test('should return "Property not found" if trying to delete a non-existent property', () => {
    const result = propertyManagement.deleteProperty('999');
    expect(result).toBe('Property not found');
  });
});
