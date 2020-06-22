// TODO: add and export your own actions

export function selectActiveStudent(student) {
  // TODO: Api call! For now, simulate a DB
  return {
    type: 'SELECT_STUDENT',
    payload: student
  };
}
