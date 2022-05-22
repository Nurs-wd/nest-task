import {
  Controller,
  Get,
  Param,
  Put,
  Delete,
  Post,
  Body,
  HttpStatus,
  HttpException,
} from '@nestjs/common';
import { NewPost } from './dto/News.dto';
import { UpdateNews } from './dto/UpdateNews.dto';
import { INews, NewsService } from '../newsService/newsService.service';

@Controller('news')
export class NewsController {
  constructor(private readonly newsService: NewsService) {}

  @Get()
  getNews() {
    return this.newsService.findAll();
  }

  @Get('/:id')
  findById(@Param('id') id): object | null {
    const res = this.newsService.findById(id);
    if (!res) {
      throw new HttpException(
        {
          status: HttpStatus.FORBIDDEN,
          error: 'Новость с таким ID не найдена',
        },
        HttpStatus.FORBIDDEN,
      );
    } else return res;
  }

  @Post()
  create(@Body() newPost: NewPost) {
    return this.newsService.create(newPost);
  }

  @Delete(':id')
  delete(@Param('id') id: string) {
    return this.newsService.delete(id);
  }

  @Put(':id')
  updateNews(
    @Body() updateNews: UpdateNews,
    @Param('id') id: string,
  ): INews | null {
    const res = this.newsService.update(updateNews, id);
    if (!res) {
      throw new HttpException(
        {
          status: HttpStatus.FORBIDDEN,
          error: 'Новость с таким ID не найдена',
        },
        HttpStatus.FORBIDDEN,
      );
    } else return res;
  }
}
