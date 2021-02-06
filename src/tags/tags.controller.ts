import { Controller, Get } from '@nestjs/common';

@Controller('tags')
export class TagsController {
    @Get()
    findAll(): string[] {
        return ['tag1', 'tag2'];
    }
}