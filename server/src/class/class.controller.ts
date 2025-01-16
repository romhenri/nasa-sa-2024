import { Controller, Get, Param, Query } from '@nestjs/common';
import { ClassService } from './class.service';
import { ApiOperation, ApiQuery, ApiTags } from '@nestjs/swagger';

@ApiTags('Class - Turma')
@Controller('class')
export class ClassController {
  constructor(private readonly classService: ClassService) {}

  /**
   * Retorna todas as turmas, permitindo Filtros
   */
  @Get()
  @ApiOperation({ summary: 'Listar Turmas com Filtros' })
  @ApiQuery({ name: 'name', required: false })
  @ApiQuery({ name: 'teacher', required: false })
  @ApiQuery({ name: 'year', required: false })
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

  /**
   * Retorna os alunos de uma turma com Filtros
   */
  @Get(':id/students')
  @ApiOperation({ summary: 'Listar Alunos de uma Turma com Filtros' })
  @ApiQuery({ name: 'min_score', required: false })
  @ApiQuery({ name: 'max_score', required: false })
  findStudents(@Param('id') id: string,
    @Query('min_score') minScore?: string,
    @Query('max_score') maxScore?: string
  ): any {
    return this.classService.getStudents(id, {
      minScore: Number(minScore),
      maxScore: Number(maxScore),
    });
  }
}
