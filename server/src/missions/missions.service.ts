import { Injectable } from '@nestjs/common';
import { readFileSync } from 'fs';

@Injectable()
export class MissionsService {
  getMissions(): string {
    const data = readFileSync('./data/missions.json', 'utf8');
    return JSON.parse(data)
  }
}
