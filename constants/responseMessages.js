module.exports = {
  // Auth messages
  LOGIN_SUCCESS: "Logged in successfully.",
  USER_NOT_FOUND: "User not found, please register first.",
  INVALID_CREDENTIALS: "Invalid email or password.",
  LOGOUT_SUCCESS: "Logged out successfully.",
  TOKEN_EXPIRED: "Session expired, please log in again.",
  UNAUTHORIZED_ACCESS: "Unauthorized access, please log in.",
  ACCOUNT_CREATED: "Account created successfully.",
  INVALID_TOKEN: "Invalid or expired token.",
  EMAIL_ALREADY_EXISTS: "An account with this email already exists.",
  INVALID_EMAIL_FORMAT: "Invalid email format.",
  PASSWORD_TOO_SHORT: "Password must be at least 6 characters long.",
  PASSWORD_MISMATCH: "Passwords do not match.",

  // Task messages
  TASK_NOT_FOUND: "Task not found",
  TASK_UPDATE_SUCCESS: "Task updated successfully",

  // General success/failure messages
  OPERATION_SUCCESS: "Operation completed successfully.",
  OPERATION_FAILED: "Operation failed. Please try again.",
  RESOURCE_NOT_FOUND: "The requested resource was not found.",
  BAD_REQUEST: "Bad request. Please check your input.",
  FORBIDDEN: "You do not have permission to perform this action.",
  SERVER_ERROR: "Something went wrong on our end. Please try again later.",

  // Data-related messages
  DATA_FETCH_SUCCESS: "Data fetched successfully.",
  DATA_UPDATE_SUCCESS: "Data updated successfully.",
  DATA_DELETION_SUCCESS: "Data deleted successfully.",
  DATA_CREATION_SUCCESS: "Data created successfully.",
  DATA_VALIDATION_ERROR: "Data validation failed.",

  // Rate limiting, throttling
  TOO_MANY_REQUESTS: "Too many requests. Please try again later.",

  // API related messages
  API_DEPRECATED:
    "This API version is deprecated, please upgrade to the latest version.",
  INVALID_API_KEY: "Invalid API key provided.",

  // Role/Permission-related messages
  INSUFFICIENT_PERMISSIONS:
    "You do not have the required permissions to access this resource.",

  // Pagination-related messages
  NO_MORE_RESULTS: "No more results available.",

  // Miscellaneous messages
  SERVICE_UNAVAILABLE:
    "The service is currently unavailable. Please try again later.",
};
