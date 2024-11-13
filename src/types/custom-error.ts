type InfoType = { status: string; message: string };

class CustomError extends Error {
  public readonly code: number;
  public readonly info?: InfoType;

  constructor(code: number, message: string, info?: InfoType) {
    super(message);
    this.code = code;
    this.info = info;

    Error.captureStackTrace(this, this.constructor);
  }
}

export default CustomError;
