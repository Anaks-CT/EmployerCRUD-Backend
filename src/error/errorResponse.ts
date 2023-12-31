class ErrorResponse extends Error {
    constructor(public status: number, public message: string) {
      super(message);
    }
  
    static badRequest(msg: string) {
      return new ErrorResponse(400, msg);
    }
  
    static notFound(msg = "Not found") {
      return new ErrorResponse(404, msg);
    }
  
    static internalError(msg: string) {
      return new ErrorResponse(500, msg);
    }
  }
  
  export default ErrorResponse;
  