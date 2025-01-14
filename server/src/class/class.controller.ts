import { Controller, Get, Param, Query } from '@nestjs/common';
import { ClassService } from './class.service';
import { ApiOperation, ApiQuery, ApiTags } from '@nestjs/swagger';

@ApiTags('Class - Turma')
@Controller('class')
export class ClassController {
  constructor(private readonly classService: ClassService) {}

  /**
   * Retorna todas as turmas, permitindo filtros opcionais por nome, professor e ano.
   */
  @Get()
  @ApiOperation({ summary: 'Listar Turmas com Filtros Opcionais' })
  @ApiQuery({ name: 'name', required: false })
  @ApiQuery({ name: 'teacher', required: false })
  @ApiQuery({ name: 'year', required: false })
  @ApiQuery({ name: 'minScore', required: false })
  @ApiQuery({ name: 'maxScore', required: false })
  findAll(
    @Query('name') name?: string,
    @Query('teacher') teacher?: string,
    @Query('year') year?: string
  ): any {
    return this.classService.getClasses({
      name,
      teacher,
      year: year ? Number(year) : undefined,
    });
  }

  /**
   * Retorna uma turma específica pelo ID.
   */
  @Get(':id')
  @ApiOperation({ summary: 'Buscar uma Turma pelo ID' })
  findOne(@Param('id') id: string): any {
    return this.classService.getClassById(id);
  }
}
