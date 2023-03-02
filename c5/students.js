const { read, write } = require('./io');

const getAllStudents = async () => {
    return read();
};

const addStudent = async (studentData) => {
    let students = await read();
    students.push(studentData);
    await write(students);
};

const deleteStudent = async (studentIndex) => {
    let students = await read();
    students = students.filter((s, i) => i !== studentIndex);
    await write(students);
};

const editStudent = async (studentIndex, studentData) => {
    let students = await read();
    students = students.map((s, i) => {
        if (i === studentIndex) {
            return {
                ...s, // {ime: 'Pero', prezime: 'Perovski', godina 2000}
                ...studentData // {ime: 'Jovan', prosek: 8.2}
            };
        }
        return s;
    });
    await write(students);
};

module.exports = {
    getAllStudents,
    addStudent,
    deleteStudent,
    editStudent
};