const routes = (handler) => [
  {
    method: 'POST',
    path: '/users',
    handler: (req, h) => handler.postUserHandler(req, h),
  },
  {
    method: 'GET',
    path: '/users/{id}',
    handler: (req) => handler.getUserByIdHandler(req),
  },
  {
    method: 'GET',
    path: '/users',
    handler: (req) => handler.getUsersByUsernameHandler(req),
  },
];

module.exports = routes;
