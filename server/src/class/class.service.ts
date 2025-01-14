import { Injectable } from '@nestjs/common';
import { readFileSync } from 'fs';

@Injectable()
export class ClassService {
  private readonly filePath = './data/class.json';

  /**
   * Retorna todas as turmas, aplicando filtros opcionais se fornecidos.
   * @param filters Filtros opcionais para a listagem
   */
  getClasses(filters?: { name?: string; teacher?: string; year?: number; minScore?: number; maxScore?: number }): any {
    let classes = this.readData();

    if (!filters) return classes;

    return classes
    .filter((c: any) =>
      (!filters.name || c.name.toLowerCase().includes(filters.name.toLowerCase())) &&
      (!filters.teacher || c.teacher.toLowerCase().includes(filters.teacher.toLowerCase())) &&
      (!filters.year || c.year === filters.year)
    )
    .map((c: any) => ({
      ...c,
      students: c.students ? c.students.filter((student: any) =>
        (!filters.minScore || student.score >= filters.minScore) &&
        (!filters.maxScore || student.score <= filters.maxScore)
      ) : []
    }));
  }

  /**
   * Retorna uma turma pelo ID.
   * @param id ID da turma
   */
  getClassById(id: string): any {
    const classes = this.readData();
    const classId = Number(id);

    const foundClass = classes.find((c: any) => c.id === classId);

    if (!foundClass) {
      return { message: 'Turma não encontrada' };
    }

    return foundClass;
  }

  /**
   * Lê o arquivo JSON e retorna os dados.
   */
  private readData(): any {
    try {
      const data = readFileSync(this.filePath, 'utf8');
      return JSON.parse(data);
    } catch (error) {
      throw new Error('Erro ao ler o arquivo class.json');
    }
  }
}
