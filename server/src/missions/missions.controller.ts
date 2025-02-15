import { Controller, Get, Query } from '@nestjs/common';
import { MissionsService } from './missions.service';
import { ApiOperation, ApiTags } from '@nestjs/swagger';

@ApiTags('Missions - Missões')
@Controller('missions')
export class MissionsController {
  constructor(private readonly missionsService: MissionsService) {}

  @Get()
  @ApiOperation({ summary: 'Listar Missões' })
  findAll(
    @Query('ods') ods?: string,
    @Query('status') status?: string,
    @Query('id') id?: string,
    @Query('max_points') max_points?: string,
    @Query('min_points') min_points?: string
  ): any {
    if (!ods && !status && !id && !max_points && !min_points) {
      return this.missionsService.getAllMissions();
    }

    return this.missionsService.getMissionsByFilter(
      ods ? Number(ods) : undefined,
      status,
      id ? Number(id) : undefined,
      max_points ? Number(max_points) : undefined,
      min_points ? Number(min_points) : undefined
    );
  }
}
