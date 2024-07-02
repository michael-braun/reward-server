import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { FsarchModule } from './fsarch/fsarch.module';

@Module({
  imports: [FsarchModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
