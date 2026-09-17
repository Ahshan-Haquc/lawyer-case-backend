// Wraps async route handlers so errors are forwarded to next() instead of
// crashing the process or requiring try/catch in every controller.
const asyncHandler = (requestHandler : any) => (req : Request, res : Response, next : any) => {
  Promise.resolve(requestHandler(req, res, next)).catch(next);
};

export default asyncHandler;