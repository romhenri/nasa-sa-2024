import { Controller, Get, Param, Query } from '@nestjs/common';
import { ClassService } from './class.service';

@Controller('class')
export class ClassController {
  constructor(private readonly classService: ClassService) {}

  /**
   * Retorna todas as turmas sem filtros.
   */
  @Get()
  findAll(): any {
    return this.classService.getAllClasses();
  }

  /**
   * Retorna uma turma específica e permite filtrar os alunos por `score`.
   */
  @Get(':id')
  findOne(
    @Param('id') id: string,
    @Query('min_score') minScore?: string,
    @Query('max_score') maxScore?: string
  ): any {
    return this.classService.getClassByIdWithFilter(
      id,
      minScore ? Number(minScore) : undefined,
      maxScore ? Number(maxScore) : undefined
    );
  }
}
