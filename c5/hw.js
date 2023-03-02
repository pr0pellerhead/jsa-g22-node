const {getAllStudents, addStudent, deleteStudent, editStudent} = require('./students');

(async () => {
    try {
        await addStudent({
            ime: 'Pero', 
            prezime: 'Perovski', 
            godina: 2000
        });

        await addStudent({
            ime: 'Stanko',
            prezime: 'Stankovski',
            godina: 2001
        });

        let students = await getAllStudents();
        console.log(students);

        await editStudent(0, { 
            ime: 'Jovan', 
            prosek: 8.2 
        });

        students = await getAllStudents();
        console.log(students);

        await deleteStudent(0);

        students = await getAllStudents();
        console.log(students);

    } catch(err) {
        console.log('ERROR', err);
    } finally {
        console.log('END OF CODE!');
    }
})();