db = new Mongo().getDB("recruit_tracker");

db.createCollection("users", { capped: false });

// db.users.insertMany([
//   { first_name: "HR", last_name: "Manager", email: "hr@cgi.com" },
//   { first_name: "Student", last_name: "Test", email: "student@cgi.com" },
// ]);

db.users.insertMany([
  {
    "college": "Sunset University",
    "email": "jane.doe@example.com",
    "gradDate": "06/2025",
    "locationPreferences": ["Denver", "Seattle", "Austin"],
    "name": "Jane Doe",
    "password": "$2b$12$exampleHash12345",
    "position": "full-time",
    "stage": "Interviewed",
    "state": "CO",
    "_id": "jane.doe@example.com"
  },
  {
    "college": "Riverside College",
    "email": "john.smith@example.com",
    "gradDate": "05/2024",
    "locationPreferences": ["Chicago", "New York", "San Francisco"],
    "name": "John Smith",
    "password": "$2b$12$exampleHash67890",
    "position": "internship",
    "stage": "Applied",
    "state": "IL",
    "_id": "john.smith@example.com"
  },
  {
    "college": "Mountainview Institute",
    "email": "sarah.connor@example.com",
    "gradDate": "08/2026",
    "locationPreferences": ["Los Angeles", "San Diego", "Las Vegas"],
    "name": "Sarah Connor",
    "password": "$2b$12$exampleHashABCDE",
    "position": "full-time",
    "stage": "Offered",
    "state": "CA",
    "_id": "sarah.connor@example.com"
  },
  {
    "college": "Lakeshore Technical",
    "email": "michael.reyes@example.com",
    "gradDate": "12/2025",
    "locationPreferences": ["Miami", "Orlando", "Tampa"],
    "name": "Michael Reyes",
    "password": "$2b$12$exampleHashFGHIJ",
    "position": "internship",
    "stage": "Screening",
    "state": "FL",
    "_id": "michael.reyes@example.com"
  },
  {
    "college": "Greenwood University",
    "email": "emily.johnson@example.com",
    "gradDate": "07/2024",
    "locationPreferences": ["Boston", "Philadelphia", "Washington D.C."],
    "name": "Emily Johnson",
    "password": "$2b$12$exampleHashKLMNO",
    "position": "full-time",
    "stage": "Applied",
    "state": "MA",
    "_id": "emily.johnson@example.com"
  },
  {
    "college": "Hilltop Academy",
    "email": "david.lee@example.com",
    "gradDate": "11/2026",
    "locationPreferences": ["Houston", "Dallas", "San Antonio"],
    "name": "David Lee",
    "password": "$2b$12$exampleHashPQRST",
    "position": "internship",
    "stage": "Interviewed",
    "state": "TX",
    "_id": "david.lee@example.com"
  },
  {
    "college": "Crestview College",
    "email": "laura.martinez@example.com",
    "gradDate": "09/2025",
    "locationPreferences": ["Atlanta", "Charlotte", "Nashville"],
    "name": "Laura Martinez",
    "password": "$2b$12$exampleHashUVWXY",
    "position": "full-time",
    "stage": "Offered",
    "state": "GA",
    "_id": "laura.martinez@example.com"
  },
  {
    "college": "Pinecrest Technical",
    "email": "james.wilson@example.com",
    "gradDate": "10/2024",
    "locationPreferences": ["Detroit", "Cleveland", "Cincinnati"],
    "name": "James Wilson",
    "password": "$2b$12$exampleHashZABCD",
    "position": "internship",
    "stage": "Screening",
    "state": "MI",
    "_id": "james.wilson@example.com"
  },
  {
    "college": "Brookside University",
    "email": "linda.garcia@example.com",
    "gradDate": "03/2026",
    "locationPreferences": ["Phoenix", "Tucson", "Flagstaff"],
    "name": "Linda Garcia",
    "password": "$2b$12$exampleHashEFGHI",
    "position": "full-time",
    "stage": "Applied",
    "state": "AZ",
    "_id": "linda.garcia@example.com"
  },
  {
    "college": "Ivywood Institute",
    "email": "robert.hernandez@example.com",
    "gradDate": "04/2025",
    "locationPreferences": ["Sacramento", "Fresno", "San Jose"],
    "name": "Robert Hernandez",
    "password": "$2b$12$exampleHashJKLMN",
    "position": "internship",
    "stage": "Interviewed",
    "state": "CA",
    "_id": "robert.hernandez@example.com"
  },
  {
    "college": "Silverlake College",
    "email": "patricia.clark@example.com",
    "gradDate": "02/2026",
    "locationPreferences": ["Portland", "Seattle", "Vancouver"],
    "name": "Patricia Clark",
    "password": "$2b$12$exampleHashOPQRS",
    "position": "full-time",
    "stage": "Offered",
    "state": "OR",
    "_id": "patricia.clark@example.com"
  },
  {
    "college": "Maplewood Academy",
    "email": "joseph.rodriguez@example.com",
    "gradDate": "01/2025",
    "locationPreferences": ["Minneapolis", "Saint Paul", "Rochester"],
    "name": "Joseph Rodriguez",
    "password": "$2b$12$exampleHashTUVWX",
    "position": "internship",
    "stage": "Screening",
    "state": "MN",
    "_id": "joseph.rodriguez@example.com"
  },
  {
    "college": "Clearwater Institute",
    "email": "susan.lopez@example.com",
    "gradDate": "06/2024",
    "locationPreferences": ["Baltimore", "Richmond", "Norfolk"],
    "name": "Susan Lopez",
    "password": "$2b$12$exampleHashYZABC",
    "position": "full-time",
    "stage": "Applied",
    "state": "MD",
    "_id": "susan.lopez@example.com"
  },
  {
    "college": "Highland University",
    "email": "william.gonzalez@example.com",
    "gradDate": "08/2027",
    "locationPreferences": ["New Orleans", "Baton Rouge", "Shreveport"],
    "name": "William Gonzalez",
    "password": "$2b$12$exampleHashDEFGH",
    "position": "internship",
    "stage": "Interviewed",
    "state": "LA",
    "_id": "william.gonzalez@example.com"
  },
  {
    "college": "Meadowland College",
    "email": "barbara.hall@example.com",
    "gradDate": "07/2026",
    "locationPreferences": ["Anchorage", "Fairbanks", "Juneau"],
    "name": "Barbara Hall",
    "password": "$2b$12$exampleHashIJKLM",
    "position": "full-time",
    "stage": "Offered",
    "state": "AK",
    "_id": "barbara.hall@example.com"
  }
])
