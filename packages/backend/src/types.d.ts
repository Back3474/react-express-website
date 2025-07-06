declare global {
  namespace Express {
    interface Request {
      db?: Database;
    }
  }
}