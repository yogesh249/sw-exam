import PropertyManagement from './PropertyManagement.lib.js';

const propertyManager = new PropertyManagement();

// Example usage
propertyManager.addProperty({
  propertyID: '1',
  title: 'Beautiful House',
  description: 'A beautiful house with a garden',
  owner: 'John Doe',
  location: '123 Main St',
  price: 500000,
  status: 'For Sale',
  dateListed: '2023-10-01',
  images: ['image1.jpg', 'image2.jpg']
});


// Example usage
propertyManager.addProperty({
    propertyID: '1',
    title: 'Beautiful House',
    description: 'A beautiful house with a garden',
    owner: 'John Doe',
    location: '123 Main St',
    price: 500000,
    status: 'For Sale',
    dateListed: '2023-10-01',
    images: ['image1.jpg', 'image2.jpg']
  });
propertyManager.updateProperty('1', { price: 600000 });

console.log(propertyManager.readProperty('1'));

propertyManager.deleteProperty('1');

console.log(propertyManager.readProperty('1'));