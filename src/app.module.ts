import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { NewsController } from './news/news.controller';
import { NewsService } from './newsService/newsService.service';

@Module({
  imports: [],
  controllers: [AppController, NewsController],
  providers: [AppService, NewsService],
})
export class AppModule {}
