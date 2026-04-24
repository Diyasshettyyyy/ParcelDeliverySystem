const mongoose = require('mongoose');
const Parcel = require('./models/Parcel');
const Driver = require('./models/Driver');
const Tracking = require('./models/Tracking');
require('dotenv').config();

// Sample parcel data
const sampleParcels = [
  {
    parcelId: 'P001',
    senderName: 'Alice Johnson',
    receiverName: 'Bob Smith',
    pickupAddress: '123 Main St, City A',
    deliveryAddress: '456 Oak Ave, City B',
    weight: 1.5,
    status: 'Pending'
  },
  {
    parcelId: 'P002',
    senderName: 'Charlie Brown',
    receiverName: 'Diana Prince',
    pickupAddress: '789 Pine Rd, City C',
    deliveryAddress: '321 Elm St, City D',
    weight: 2.3,
    status: 'In Transit',
    driverId: 'D001'
  },
  {
    parcelId: 'P003',
    senderName: 'Eve Wilson',
    receiverName: 'Frank Miller',
    pickupAddress: '555 Maple Ln, City E',
    deliveryAddress: '777 Birch Blvd, City F',
    weight: 0.8,
    status: 'Delivered'
  },
  {
    parcelId: 'P004',
    senderName: 'Grace Lee',
    receiverName: 'Henry Davis',
    pickupAddress: '999 Cedar St, City G',
    deliveryAddress: '111 Spruce Ave, City H',
    weight: 3.1,
    status: 'Pending'
  },
  {
    parcelId: 'P005',
    senderName: 'Ivy Chen',
    receiverName: 'Jack Taylor',
    pickupAddress: '222 Willow Way, City I',
    deliveryAddress: '333 Poplar Pl, City J',
    weight: 1.2,
    status: 'In Transit',
    driverId: 'D002'
  },
  {
    parcelId: 'P006',
    senderName: 'Kate Moore',
    receiverName: 'Liam Garcia',
    pickupAddress: '444 Ash St, City K',
    deliveryAddress: '666 Fir Rd, City L',
    weight: 2.7,
    status: 'Delivered'
  },
  {
    parcelId: 'P007',
    senderName: 'Mia Rodriguez',
    receiverName: 'Noah Martinez',
    pickupAddress: '888 Walnut Ave, City M',
    deliveryAddress: '999 Chestnut Ln, City N',
    weight: 1.9,
    status: 'Pending'
  },
  {
    parcelId: 'P008',
    senderName: 'Olivia Anderson',
    receiverName: 'Parker Thomas',
    pickupAddress: '111 Hickory St, City O',
    deliveryAddress: '222 Sycamore Blvd, City P',
    weight: 0.5,
    status: 'In Transit',
    driverId: 'D001'
  },
  {
    parcelId: 'P009',
    senderName: 'Quinn Jackson',
    receiverName: 'Riley White',
    pickupAddress: '333 Dogwood Dr, City Q',
    deliveryAddress: '444 Magnolia Way, City R',
    weight: 4.2,
    status: 'Delivered'
  },
  {
    parcelId: 'P010',
    senderName: 'Sophia Harris',
    receiverName: 'Tyler Clark',
    pickupAddress: '555 Redwood Rd, City S',
    deliveryAddress: '666 Sequoia St, City T',
    weight: 1.6,
    status: 'Pending'
  }
];

// Sample driver data
const sampleDrivers = [
  {
    driverId: 'D001',
    name: 'John Smith',
    phone: '+1-555-0101',
    vehicleNumber: 'VAN-001',
    routeId: 'R001',
    latitude: 40.7128,
    longitude: -74.0060
  },
  {
    driverId: 'D002',
    name: 'Sarah Johnson',
    phone: '+1-555-0102',
    vehicleNumber: 'TRUCK-002',
    routeId: 'R002',
    latitude: 34.0522,
    longitude: -118.2437
  },
  {
    driverId: 'D003',
    name: 'Mike Davis',
    phone: '+1-555-0103',
    vehicleNumber: 'VAN-003',
    latitude: 41.8781,
    longitude: -87.6298
  }
];

// Sample tracking data
const sampleTracking = [
  {
    parcelId: 'P002',
    driverId: 'D001',
    latitude: 40.7128,
    longitude: -74.0060,
    timestamp: new Date(Date.now() - 3600000) // 1 hour ago
  },
  {
    parcelId: 'P002',
    driverId: 'D001',
    latitude: 40.7589,
    longitude: -73.9851,
    timestamp: new Date(Date.now() - 1800000) // 30 minutes ago
  },
  {
    parcelId: 'P002',
    driverId: 'D001',
    latitude: 40.7505,
    longitude: -73.9934,
    timestamp: new Date() // now
  },
  {
    parcelId: 'P005',
    driverId: 'D002',
    latitude: 34.0522,
    longitude: -118.2437,
    timestamp: new Date(Date.now() - 7200000) // 2 hours ago
  },
  {
    parcelId: 'P005',
    driverId: 'D002',
    latitude: 34.0901,
    longitude: -118.4065,
    timestamp: new Date() // now
  },
  {
    parcelId: 'P008',
    driverId: 'D001',
    latitude: 41.8781,
    longitude: -87.6298,
    timestamp: new Date() // now
  }
];

// Connect to MongoDB and insert samples
async function insertSamples() {
  try {
    await mongoose.connect(process.env.MONGODB_URI, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });

    console.log('Connected to MongoDB Atlas');

    // Clear existing data
    await Parcel.deleteMany({});
    await Driver.deleteMany({});
    await Tracking.deleteMany({});
    console.log('Cleared existing parcels, drivers, and tracking data');

    // Insert sample parcels
    await Parcel.insertMany(sampleParcels);
    console.log('Sample parcels inserted successfully');

    // Insert sample drivers
    await Driver.insertMany(sampleDrivers);
    console.log('Sample drivers inserted successfully');

    // Insert sample tracking data
    await Tracking.insertMany(sampleTracking);
    console.log('Sample tracking data inserted successfully');

    // Close connection
    await mongoose.connection.close();
    console.log('Database connection closed');
  } catch (error) {
    console.error('Error inserting samples:', error);
    process.exit(1);
  }
}

// Run the function
insertSamples();