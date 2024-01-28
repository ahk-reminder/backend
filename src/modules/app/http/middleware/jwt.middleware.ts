import { Injectable, NestMiddleware } from '@nestjs/common';
import { Request, Response, NextFunction } from 'express';

@Injectable()
export class JwtAuth implements NestMiddleware {
  use(request: Request, response: Response, next: NextFunction) {
    console.log('JWT is valid...');
    next();
  }
}
