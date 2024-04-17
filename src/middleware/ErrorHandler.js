const handleErr = (error, req, res) => {
  const statusCode = error.statusCode || 500;
  const status = error.status || "error";

  res.status(statusCode).json({
    status: status || "error",
    message: error.message,
  });
};

export { handleErr };
