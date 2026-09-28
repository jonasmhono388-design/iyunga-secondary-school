//partime database
// ===== Kusoma wanafunzi waliopo tayari kutoka localStorage =====
let students = JSON.parse(localStorage.getItem('iyungaStudents')) || [];
let studentIdCounter = Number(localStorage.getItem('iyungaCounter')) || 1;

const addBtn = document.getElementById('addBtn');
const formTitle = document.getElementById('formTitle');

// ===== Kuangalia kama tuko kwenye hali ya "Edit" (kupitia URL) =====
const urlParams = new URLSearchParams(window.location.search);
const editId = urlParams.get('edit');

if (editId !== null) {
    const student = students.find(function (s) {
        return s.studentId === editId;
    });

    if (student) {
        document.getElementById('fullName').value = student.fullName;
        document.getElementById('email').value = student.email;
        document.getElementById('dob').value = student.dob;
        document.getElementById('age').value = student.age;
        document.getElementById('studentClass').value = student.studentClass;
        document.getElementById('country').value = student.country;
        document.getElementById('region').value = student.region;
        document.getElementById('district').value = student.district;
        document.getElementById('ward').value = student.ward;
        document.getElementById('guardianPhone').value = student.guardianPhone;

        formTitle.textContent = 'Edit Student - ' + student.studentId;
        addBtn.textContent = 'Update Student';
    }
}

// ===== Add / Update =====
addBtn.addEventListener('click', function () {

    const studentData = {
        fullName: document.getElementById('fullName').value,
        email: document.getElementById('email').value,
        dob: document.getElementById('dob').value,
        age: document.getElementById('age').value,
        studentClass: document.getElementById('studentClass').value,
        country: document.getElementById('country').value,
        region: document.getElementById('region').value,
        district: document.getElementById('district').value,
        ward: document.getElementById('ward').value,
        guardianPhone: document.getElementById('guardianPhone').value
    };

    if (editId !== null) {
        // ----- Hali ya Update -----
        students = students.map(function (s) {
            if (s.studentId === editId) {
                studentData.studentId = editId;
                return studentData;
            }
            return s;
        });

    } else {
        // ----- Hali ya Add Mpya -----
        const year = new Date().getFullYear();
        const paddedNumber = String(studentIdCounter).padStart(3, '0');
        studentData.studentId = 'IYU-' + year + '-' + paddedNumber;

        students.push(studentData);
        studentIdCounter++;
        localStorage.setItem('iyungaCounter', studentIdCounter);
    }

    localStorage.setItem('iyungaStudents', JSON.stringify(students));

    window.location.href = 'students.html';
});