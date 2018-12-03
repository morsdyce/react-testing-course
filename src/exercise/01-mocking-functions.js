const users = {
  'joe': { isAdmin: true },
  'james': { isAdmin: false },
  'jimmy': { isAdmin: false }
};

function getUserPermissions(userName, callback) {
  const user = users[userName];

  if (!user) {
    callback({ error: 'Users does not exist', errorCode: 12 });
    return;
  }

  if (user.isAdmin) {
    callback('edit');
    return;
  }

  callback('read')
}


export default getUserPermissions;
