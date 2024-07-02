import { Module } from '@nestjs/common';
import { DbModule } from './db/db.module';
import { ConfigModule } from './config/config.module';
import { AuthModule } from './auth/auth.module';

@Module({
  imports: [DbModule, ConfigModule, AuthModule]
})
export class FsarchModule {}
