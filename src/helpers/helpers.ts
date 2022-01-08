export const checkName = (history: any, e: any): void => {
  if (e.target.name === 'profile') {
    history.push('/profile');
  }
  if (e.target.name === 'calendar') {
    history.push('/calendar');
  }
  if (e.target.name === 'archive') {
    history.push('/archive');
  }
  if (e.target.name === 'board') {
    history.push('/board');
  }
  if (e.target.name === 'bookmarks') {
    history.push('/bookmarks');
  }
};

export const randomizer = (data: Array<{ id: number; text: string }>) => {
  const num = Math.round(Math.random() * 10);
  return data.find((question) => {
    if (num < 3) {
      return question.id === 1;
    }
    if (num <= 5) {
      return question.id === 2;
    }
    if (num < 8) {
      return question.id === 3;
    }
    if (num < 10) {
      return question.id === 4;
    }
    return question.id === 5; 
  } );
};
