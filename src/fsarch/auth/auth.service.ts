import { Injectable } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { StaticAuthService } from './static/static-auth.service.js';
import { ConfigAuthType } from '../config/config.type';
import { Role } from './role.enum';
import type { IAuthService } from './types/auth-service.type';

@Injectable()
export class AuthService implements IAuthService {
  private readonly authService: IAuthService;

  constructor(
    private readonly configService: ConfigService,
    private readonly staticAuthService: StaticAuthService,
  ) {
    const authType = configService.get<ConfigAuthType['type']>('auth.type');

    this.authService = authType === 'static' ? staticAuthService : undefined;
  }

  signIn(username: string, password: string): Promise<{ accessToken: string }> {
    return this.authService.signIn(username, password);
  }

  hasGrant(subjectId: string, grant: Role): Promise<boolean> {
    return this.authService.hasGrant(subjectId, grant);
  }
}
