exports.makeSuccessResponse = data => {
  return {
    code: 0,
    data,
    info: null
  };
};
exports.makeErrorResponse = info => {
  return {
    code: 1,
    data: null,
    info: info || "Server Error"
  };
};
