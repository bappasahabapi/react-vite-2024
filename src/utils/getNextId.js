export const getNextId = (tasksArray) => {
    const maxId = tasksArray.reduce((prev, current) =>
      prev && prev > current.id ? prev : current.id
    );

    return maxId + 1;
  };