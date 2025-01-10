import { Module } from '@nestjs/common';

import { AppController } from './app.controller';
import { AppService } from './app.service';

import { ClassController } from './class/class.controller';
import { ClassService } from './class/class.service';	

import { MissionsController } from './missions/missions.controller';
import { MissionsService } from './missions/missions.service';	

@Module({
  imports: [],
  controllers: [AppController, ClassController, MissionsController],
  providers: [AppService, ClassService, MissionsService],
})
export class AppModule {}
