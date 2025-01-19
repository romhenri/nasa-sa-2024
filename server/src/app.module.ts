import { Module } from '@nestjs/common';
import { APP_GUARD } from '@nestjs/core';

import { AppController } from './app.controller';
import { AppService } from './app.service';

import { ClassController } from './class/class.controller';
import { ClassService } from './class/class.service';	

import { MissionsController } from './missions/missions.controller';
import { MissionsService } from './missions/missions.service';

import { AuthModule } from './auth/auth.module';
import { JwtAuthGuard } from './auth/jwt-auth.guard';

@Module({
  imports: [AuthModule],
  controllers: [AppController, ClassController, MissionsController],
  providers: [AppService, ClassService, MissionsService, {
    provide: APP_GUARD,
    useClass: JwtAuthGuard,
  },],
})
export class AppModule {}
