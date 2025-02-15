import { Injectable } from '@nestjs/common';
import { readFileSync } from 'fs';

@Injectable()
export class MissionsService {
  private readonly filePath = './data/missions.json';

    /**
   * Retorna todas as missões sem filtros.
   */
  getAllMissions(): string {
    return this.readData();
  }

    /**
   * Retorna uma missão pelo ODS e filtra as missões pelo status ou pontos, se necessário.
   * @param id ID da missão
   * @param ods Número do ODS
   * @param status Status da missão
   * @param points Valor em pontos
   */
    getMissionsByFilter(ods?: number, status?: string, id?: number, max_points?: number, min_points?: number): any {
      const missions = this.readData();
  
      const foundMissions = missions.filter((mission: any) => 
          (ods === undefined || mission.ods === ods) &&
          (status === undefined || mission.status === status) &&
          (id === undefined || mission.id === id) &&
          (min_points === undefined || mission.points >= min_points) &&
          (max_points === undefined || mission.points <= max_points)
      );
  
      return foundMissions.length > 0 ? foundMissions : { message: 'Not Found' };
  }

  private readData(): any {
    try {
      const data = readFileSync(this.filePath, 'utf8');
      return JSON.parse(data);
    } catch (error) {
      throw new Error('Erro ao ler o arquivo class.json');
    }
  }
}
