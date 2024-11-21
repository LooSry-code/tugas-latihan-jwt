import { Request } from 'express';
import { User } from './models/user.model'; // Sesuaikan jalur impor sesuai dengan model User Anda

declare module 'express-serve-static-core' {
  interface Request {
    user?: User;
  }
}
