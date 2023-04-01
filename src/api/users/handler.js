class UserHandler {
  constructor(service, validator) {
    this._service = service;
    this._validator = validator;
  }

  async postUserHandler(req, h) {
    this._validator.validateUserPayload(req.payload);
    const { username, password, fullname } = req.payload;
    await this._service.verifyNewUsername(username);

    const userId = await this._service.addUser({
      username,
      password,
      fullname,
    });

    return h
      .response({
        status: 'success',
        message: 'User berhasil ditambahkan',
        data: {
          userId,
        },
      })
      .code(201);
  }

  async getUserByIdHandler(req) {
    const { id } = req.params;
    const user = await this._service.getUserById(id);
    return {
      status: 'success',
      data: {
        user,
      },
    };
  }
}

module.exports = UserHandler;
