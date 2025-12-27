import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  const POST = process.env.PORT ?? 3000;
  await app.listen(POST,()=>{
    console.log("server ishladi✅");
    
  });
}

void bootstrap();
