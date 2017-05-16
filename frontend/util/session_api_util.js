export const signup = user => (
  $.ajax({
    method: 'post',
    url: 'api/users',
    data: {user}
  })
);

export const signin = user => (
  $.ajax({
    method: 'post',
    url: 'api/session',
    data: {user}
  })
);

export const signout = () => (
  $.ajax({
    method: 'delete',
    url: 'api/session',
  })
);
