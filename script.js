document.getElementById('attendanceForm').addEventListener('submit', function(event) {
    event.preventDefault();
    
    let username = document.getElementById('username').value.trim();
    let email = document.getElementById('email').value.trim();
    let mobile = document.getElementById('mobile').value.trim();
    let course = document.getElementById('course').value.trim();
    
    // Simple validation
    if (!username || !email || !mobile || !course) {
        alert('Please fill in all fields.');
        return;
    }

    // Create attendance object
    let attendance = {
        username: username,
        email: email,
        mobile: mobile,
        course: course
    };

    // Retrieve existing attendance data from local storage
    let attendanceList = JSON.parse(localStorage.getItem('attendanceList')) || [];
    
    // Check for duplicates (optional)
    const duplicate = attendanceList.find(item => item.email === email);
    if (duplicate) {
        alert('This email has already been recorded.');
        return;
    }

    // Add new attendance to the list
    attendanceList.push(attendance);
    localStorage.setItem('attendanceList', JSON.stringify(attendanceList));

    alert('Attendance recorded successfully!');
    document.getElementById('attendanceForm').reset();
});
