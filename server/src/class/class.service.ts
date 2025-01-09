import { Injectable } from '@nestjs/common';
import { readFileSync } from 'fs';

@Injectable()
export class ClassService {
  getClass(): string {
    const data = readFileSync('./data/class.json', 'utf8');
    return JSON.parse(data)
  }
}
