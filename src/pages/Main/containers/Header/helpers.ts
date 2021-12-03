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
