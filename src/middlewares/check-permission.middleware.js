import { TypeRole } from '../common/type.common';

export const checkPermission = (req, res, next) => {
  const { user } = req;
  //Check permission
  switch (user.role) {
    case TypeRole.ADMIN:
      req.permission = TypeRole.ADMIN;
      break;
    case TypeRole.STAFF:
      req.permission = TypeRole.STAFF;
      break;
    case TypeRole.USER:
      req.permission = TypeRole.USER;
      break;
    default:
      return res.status(403).json({
        message: 'Permission denied!',
        success: false,
      });
  }
  next();
};