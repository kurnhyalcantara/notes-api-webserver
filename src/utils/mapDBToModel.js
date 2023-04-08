/* eslint-disable camelcase */

const mapToDBModel = ({
  id,
  title,
  body,
  tags,
  created_at,
  updated_at,
  username,
}) => ({
  id,
  title,
  body,
  tags,
  createdAt: created_at,
  updateAt: updated_at,
  username,
});

module.exports = { mapToDBModel };
