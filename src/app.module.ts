import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { AuthModule } from './auth/auth.module';
import { UsersModule } from './users/users.module';
import { FeedsModule } from './feeds/feeds.module';
import { CommentsModule } from './comments/comments.module';
import { PrismaService } from '@app/shared';
import { LikesModule } from './likes/likes.module';
import { FavoritesModule } from './favorites/favorites.module';
import { FollowsModule } from './follows/follows.module';

@Module({
  imports: [AuthModule, UsersModule, FeedsModule, CommentsModule, LikesModule, FavoritesModule, FollowsModule],
  controllers: [AppController],
  providers: [AppService, PrismaService],
})
export class AppModule {}
