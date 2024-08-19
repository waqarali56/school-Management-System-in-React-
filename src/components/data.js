
// Admins data
export const admins = [
  { id: 1, name: "Waqar Ali", email: "bhattiwaqar5656@admin.gmail.com", password: "5656", gender: "Male" },
  { id: 2, name: "Bob Smith", email: "bob.smith@admin.example.com", password: "securePass456", gender: "Male" }
];

// Teachers data
export const teachers = [
  { id: 1, name: "Waqar Ali", email: "bhattiwaqar5656@teacher.gmail.com", password: "5656", gender: "Male", age: 30, assignClass: "8A" },
  { id: 2, name: "Bob Smith", email: "waqarali002424@teacher.gmail.com", password: "5656", gender: "Male", age: 45, assignClass: "10A" },
  { id: 3, name: "Carol Davis", email: "carol.davis@teacher.example.com", password: "myPassword789", gender: "Female", age: 35, assignClass: "11A" },
  { id: 4, name: "David Wilson", email: "david.wilson@teacher.example.com", password: "topSecret012", gender: "Male", age: 40, assignClass: "9A" }
];


export const attendanceRecords = [
  {
    date: "2024-08-05",
    classCode: "8A",
    teacherId: 1, // Waqar Ali
    attendance: [
      { registrationNumber: "REG143", name: "Waqar Bhatti", status: "present" },
      { registrationNumber: "REG126", name: "Daisy Lee", status: "absent" },
      { registrationNumber: "REG129", name: "George King", status: "present" },
      { registrationNumber: "REG132", name: "Julia Rose", status: "present" },
      { registrationNumber: "REG135", name: "Mason Clark", status: "absent" },
      { registrationNumber: "REG138", name: "Pauline Wright", status: "present" },
      { registrationNumber: "REG141", name: "Sammy Carter", status: "present" },
    ]
  },
  {
    date: "2024-08-05",
    classCode: "9A",
    teacherId: 4, // David Wilson
    attendance: [
      { registrationNumber: "REG124", name: "Bob Smith", status: "present" },
      { registrationNumber: "REG127", name: "Ethan White", status: "present" },
      { registrationNumber: "REG130", name: "Hannah Black", status: "absent" },
      { registrationNumber: "REG133", name: "Kevin Blue", status: "present" },
      { registrationNumber: "REG136", name: "Nina Perez", status: "present" },
      { registrationNumber: "REG139", name: "Quinn Davis", status: "present" },
      { registrationNumber: "REG142", name: "Tina Harris", status: "absent" },
    ]
  },
  {
    date: "2024-08-06",
    classCode: "8A",
    teacherId: 1, // Waqar Ali
    attendance: [
      { registrationNumber: "REG143", name: "Waqar Bhatti", status: "present" },
      { registrationNumber: "REG126", name: "Daisy Lee", status: "present" },
      { registrationNumber: "REG129", name: "George King", status: "present" },
      { registrationNumber: "REG132", name: "Julia Rose", status: "present" },
      { registrationNumber: "REG135", name: "Mason Clark", status: "present" },
      { registrationNumber: "REG138", name: "Pauline Wright", status: "present" },
      { registrationNumber: "REG141", name: "Sammy Carter", status: "absent" },
    ]
  },
  {
    date: "2024-08-06",
    classCode: "9A",
    teacherId: 4, // David Wilson
    attendance: [
      { registrationNumber: "REG124", name: "Bob Smith", status: "present" },
      { registrationNumber: "REG127", name: "Ethan White", status: "absent" },
      { registrationNumber: "REG130", name: "Hannah Black", status: "present" },
      { registrationNumber: "REG133", name: "Kevin Blue", status: "absent" },
      { registrationNumber: "REG136", name: "Nina Perez", status: "present" },
      { registrationNumber: "REG139", name: "Quinn Davis", status: "present" },
      { registrationNumber: "REG142", name: "Tina Harris", status: "present" },
    ]
  },
  {
    date: "2024-08-07",
    classCode: "8A",
    teacherId: 1, // Waqar Ali
    attendance: [
      { registrationNumber: "REG143", name: "Waqar Bhatti", status: "present" },
      { registrationNumber: "REG126", name: "Daisy Lee", status: "present" },
      { registrationNumber: "REG129", name: "George King", status: "absent" },
      { registrationNumber: "REG132", name: "Julia Rose", status: "present" },
      { registrationNumber: "REG135", name: "Mason Clark", status: "present" },
      { registrationNumber: "REG138", name: "Pauline Wright", status: "absent" },
      { registrationNumber: "REG141", name: "Sammy Carter", status: "present" },
    ]
  },
  {
    date: "2024-08-07",
    classCode: "9A",
    teacherId: 4, // David Wilson
    attendance: [
      { registrationNumber: "REG124", name: "Bob Smith", status: "absent" },
      { registrationNumber: "REG127", name: "Ethan White", status: "present" },
      { registrationNumber: "REG130", name: "Hannah Black", status: "present" },
      { registrationNumber: "REG133", name: "Kevin Blue", status: "present" },
      { registrationNumber: "REG136", name: "Nina Perez", status: "absent" },
      { registrationNumber: "REG139", name: "Quinn Davis", status: "present" },
      { registrationNumber: "REG142", name: "Tina Harris", status: "present" },
    ]
  },
  {
    date: "2024-08-08",
    classCode: "8A",
    teacherId: 1, // Waqar Ali
    attendance: [
      { registrationNumber: "REG143", name: "Waqar Bhatti", status: "present" },
      { registrationNumber: "REG126", name: "Daisy Lee", status: "present" },
      { registrationNumber: "REG129", name: "George King", status: "present" },
      { registrationNumber: "REG132", name: "Julia Rose", status: "present" },
      { registrationNumber: "REG135", name: "Mason Clark", status: "present" },
      { registrationNumber: "REG138", name: "Pauline Wright", status: "present" },
      { registrationNumber: "REG141", name: "Sammy Carter", status: "present" },
    ]
  },
  {
    date: "2024-08-08",
    classCode: "9A",
    teacherId: 4, // David Wilson
    attendance: [
      { registrationNumber: "REG124", name: "Bob Smith", status: "present" },
      { registrationNumber: "REG127", name: "Ethan White", status: "present" },
      { registrationNumber: "REG130", name: "Hannah Black", status: "absent" },
      { registrationNumber: "REG133", name: "Kevin Blue", status: "present" },
      { registrationNumber: "REG136", name: "Nina Perez", status: "present" },
      { registrationNumber: "REG139", name: "Quinn Davis", status: "present" },
      { registrationNumber: "REG142", name: "Tina Harris", status: "absent" },
    ]
  },
];



// Students data
export const students = [
  { name: "Alice Johnson", registrationNumber: "REG123", classCode: "8A", gender: "Female", age: 13, email: "alice.johnson@student.example.com", password: "password123" },
  { name: "Bob Smith", registrationNumber: "REG124", classCode: "9A", gender: "Male", age: 14, email: "bob.smith@student.example.com", password: "password124" },
  { name: "Charlie Brown", registrationNumber: "REG125", classCode: "10A", gender: "Male", age: 15, email: "charlie.brown@student.example.com", password: "password125" },
  { name: "Daisy Lee", registrationNumber: "REG126", classCode: "8A", gender: "Female", age: 13, email: "daisy.lee@student.example.com", password: "password126" },
  { name: "Ethan White", registrationNumber: "REG127", classCode: "9A", gender: "Male", age: 14, email: "ethan.white@student.example.com", password: "password127" },
  { name: "Fiona Green", registrationNumber: "REG128", classCode: "10A", gender: "Female", age: 15, email: "fiona.green@student.example.com", password: "password128" },
  { name: "George King", registrationNumber: "REG129", classCode: "8A", gender: "Male", age: 13, email: "george.king@student.example.com", password: "password129" },
  { name: "Hannah Black", registrationNumber: "REG130", classCode: "9A", gender: "Female", age: 14, email: "hannah.black@student.example.com", password: "password130" },
  { name: "Ian Grey", registrationNumber: "REG131", classCode: "10A", gender: "Male", age: 15, email: "ian.grey@student.example.com", password: "password131" },
  { name: "Julia Rose", registrationNumber: "REG132", classCode: "8A", gender: "Female", age: 13, email: "julia.rose@student.example.com", password: "password132" },
  { name: "Kevin Blue", registrationNumber: "REG133", classCode: "9A", gender: "Male", age: 14, email: "kevin.blue@student.example.com", password: "password133" },
  { name: "Lily Brown", registrationNumber: "REG134", classCode: "10A", gender: "Female", age: 15, email: "lily.brown@student.example.com", password: "password134" },
  { name: "Mason Clark", registrationNumber: "REG135", classCode: "8A", gender: "Male", age: 13, email: "mason.clark@student.example.com", password: "password135" },
  { name: "Nina Perez", registrationNumber: "REG136", classCode: "9A", gender: "Female", age: 14, email: "nina.perez@student.example.com", password: "password136" },
  { name: "Oscar Hall", registrationNumber: "REG137", classCode: "10A", gender: "Male", age: 15, email: "oscar.hall@student.example.com", password: "password137" },
  { name: "Pauline Wright", registrationNumber: "REG138", classCode: "8A", gender: "Female", age: 13, email: "pauline.wright@student.example.com", password: "password138" },
  { name: "Quinn Davis", registrationNumber: "REG139", classCode: "9A", gender: "Non-binary", age: 14, email: "quinn.davis@student.example.com", password: "password139" },
  { name: "Rachel Adams", registrationNumber: "REG140", classCode: "10A", gender: "Female", age: 15, email: "rachel.adams@student.example.com", password: "password140" },
  { name: "Sammy Carter", registrationNumber: "REG141", classCode: "8A", gender: "Non-binary", age: 13, email: "sammy.carter@student.example.com", password: "password141" },
  { name: "Tina Harris", registrationNumber: "REG142", classCode: "9A", gender: "Female", age: 14, email: "tina.harris@student.example.com", password: "password142" },
  { name: "Waqar Bhatti", registrationNumber: "REG143", classCode: "8A", gender: "Male", age: 16, email: "bhattiwaqar5656@student.gmail.com", password: "5656" },
  { name: "Zara Wells", registrationNumber: "REG144", classCode: "11A", gender: "Female", age: 16, email: "zara.wells@student.example.com", password: "password144" }
];



// Function to count the number of students in a class


// Update the classes array with the correct number of students
export const classes = [
  { classCode: "8A", grade: "8th", section: "A",  assignedTeacherId: 1 },
  { classCode: "8B", grade: "8th", section: "B", assignedTeacherId: null },
  { classCode: "9A", grade: "9th", section: "A",  assignedTeacherId: 4 },
  { classCode: "9B", grade: "9th", section: "B",  assignedTeacherId: null },
  { classCode: "10A", grade: "10th", section: "A",  assignedTeacherId: 2 },
  { classCode: "10B", grade: "10th", section: "B",  assignedTeacherId: null },
  { classCode: "11A", grade: "11th", section: "A",  assignedTeacherId: 3 },
  { classCode: "11B", grade: "11th", section: "B", assignedTeacherId: null }
];
