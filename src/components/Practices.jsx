export const Practices = () => {
  const students = [];

  console.log(Boolean(students.length));
  console.log(students.length);

  return (
    <div>
      {/* <p>{!students.length && "No students found"}</p> */}
      {/* 1st solution */}

      {/* <p>{students.length === 0 && "No students found"}</p> */}
      {/* 2st solution */}

      <p>{!students.length && "No students found"}</p>
      {/* 3st solution */}
      {/* <p>{!Boolean(students.length) && "No students found"}</p> */}
      <p>Number of students: {students.length}</p>
    </div>
  );
};
