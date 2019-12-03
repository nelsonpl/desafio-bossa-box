import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { MongooseModule } from '@nestjs/mongoose';
import { environment } from './environments/environment';
import { ToolModule } from './tool/tool.module';

@Module({
  imports: [MongooseModule.forRoot(environment.dataBaseUrl, { useNewUrlParser: true, useUnifiedTopology: true }), ToolModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule { }
