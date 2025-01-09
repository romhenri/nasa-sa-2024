import { Controller, Get } from '@nestjs/common';
import { ClassService } from './class.service';

@Controller('class')
export class ClassController {
  constructor(private readonly classService: ClassService) {}

  @Get()
  findAll(): string {
    return this.classService.getClass();
  }
}
