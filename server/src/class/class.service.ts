import { Injectable } from '@nestjs/common';
import { readFileSync } from 'fs';

@Injectable()
export class ClassService {
  private readonly classPath = './data/class.json';
  private readonly studentsPath = './data/students.json';

  /**
   * Retorna todas as turmas, aplicando filtros opcionais se fornecidos.
   * @param filters Filtros opcionais para a listagem
   */
  getClasses(filters?: { name?: string; teacher?: string; year?: number}): any {
    let classes = this.readClassData();

    if (!filters) return classes;

    return classes
    .filter((c: any) =>
      (!filters.name || c.name.toLowerCase().includes(filters.name.toLowerCase())) &&
      (!filters.teacher || c.teacher.toLowerCase().includes(filters.teacher.toLowerCase())) &&
      (!filters.year || c.year === filters.year)
    );
  }

  getStudents(id: string, filter ?: { minScore?: number; maxScore?: number }): any {
    const classes = this.readStudentsData();
    const classId = Number(id);

    const students = classes.filter((student: any) => student.classId === classId);

    if (!students) {
      return { message: 'Alunos não encontrados' };
    }

    return students.filter((student: any) =>
      (!filter.minScore || student.score >= filter.minScore) &&
      (!filter.maxScore || student.score <= filter.maxScore)
    );
  }

  /**
   * Retorna uma turma pelo ID.
   * @param id ID da turma
   */
  getClassById(id: string): any {
    const classes = this.readClassData();
    const classId = Number(id);

    const foundClass = classes.find((c: any) => c.id === classId);

    if (!foundClass) {
      return { message: 'Turma não encontrada' };
    }

    return foundClass;
  }
  
  private readClassData(): any {
    return this.readData(this.classPath);
  }

  private readStudentsData(): any {
    return this.readData(this.studentsPath);
  }

  /**
   * Lê o arquivo JSON e retorna os dados.
   */
  private readData(path: string): any {
    try {
      const data = readFileSync(path, 'utf8');
      return JSON.parse(data);
    } catch (error) {
      throw new Error('Erro ao ler o arquivo class.json');
    }
  }
}
