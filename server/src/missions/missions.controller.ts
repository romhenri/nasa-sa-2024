import { Controller, Get } from '@nestjs/common';
import { MissionsService } from './missions.service';
import {
  ApiOperation,
  ApiTags,
} from '@nestjs/swagger';

@ApiTags('Missions - Missões')
@Controller('missions')
export class MissionsController {
  constructor(private readonly missionsService: MissionsService) {}

  @Get()
  @ApiOperation({ summary: 'Listar Missões' })
  findAll(): string {
    return this.missionsService.getMissions();
  }
}
