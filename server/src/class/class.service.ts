import { Injectable } from '@nestjs/common';
import { readFileSync } from 'fs';

@Injectable()
export class ClassService {
  private readonly filePath = './data/class.json';

  /**
   * Retorna todas as turmas sem filtros.
   */
  getAllClasses(): any {
    return this.readData();
  }

  /**
   * Retorna uma turma pelo ID e filtra os alunos pelo score, se necessário.
   * @param id ID da turma
   * @param minScore Valor mínimo de score (opcional)
   * @param maxScore Valor máximo de score (opcional)
   */
  getClassByIdWithFilter(id: string, minScore?: number, maxScore?: number): any {
    const classes = this.readData();
    const classId = Number(id);

    const foundClass = classes.find((c: any) => c.id === classId);

    if (!foundClass) {
      return { message: 'Not Found', };
    }

    if (minScore !== undefined || maxScore !== undefined) {
      foundClass.students = foundClass.students.filter((student: any) => {
        return (
          (minScore === undefined || student.score >= minScore) &&
          (maxScore === undefined || student.score <= maxScore)
        );
      });
    }

    return foundClass;
  }

  /**
   * Lê o arquivo JSON e retornar os dados.
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
