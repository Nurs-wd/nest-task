import {
  Controller,
  Get,
  Param,
  Put,
  Delete,
  Post,
  Body,
} from '@nestjs/common';
import { NewPost } from './dto/News.dto';
import { UpdateNews } from './dto/UpdateNews.dto';
import { NewsService } from '../newsService/newsService.service';

@Controller('news')
export class NewsController {
  constructor(private readonly newsService: NewsService) {}

  @Get()
  getNews() {
    return this.newsService.getNews();
  }

  @Get(':id')
  getPost(@Param('id') id): string | object {
    return this.newsService.getWithId(id);
  }
  //{
  // 		"title": "Название новости",
  // 		"description": "Описание новости",
  // 		"ownerId": "8fcc0e4a-8595-4221-80dd-2e35f6315ebf"
  // 	}

  @Post()
  newPost(@Body() newPost: NewPost) {
    return this.newsService.newPost(newPost);
  }
  @Delete(':id')
  removeNews(@Param('id') id: string) {
    return this.newsService.deleteNews(id);
  }

  @Put(':id')
  update(@Body() updateNews: UpdateNews, @Param() id: string) {
    return this.newsService.update(updateNews, id);
  }
}
