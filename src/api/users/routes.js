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
];

module.exports = routes;
