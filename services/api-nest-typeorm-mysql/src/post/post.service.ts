import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { CreatePostDto } from './dto/create-post.dto';
import { UsersService } from 'src/users/users.service';
import { InjectRepository } from '@nestjs/typeorm';
import { Post } from './entities/post.entity';
import { Repository } from 'typeorm';

@Injectable()
export class PostService {
  constructor(
    @InjectRepository(Post) private postRepository: Repository<Post>,
    private usersService: UsersService,
  ) {}

  async createPost(post: CreatePostDto): Promise<Post> {
    try {
      const userFound = await this.usersService.getUser(post.authorId);
      
      if (!userFound) {
        throw new HttpException('Usuario no encontrado', HttpStatus.NOT_FOUND);
      }

      const newPost = this.postRepository.create(post);
      return this.postRepository.save(newPost);
    } catch (error) {
      if (error instanceof HttpException) {
        throw error;
      }
      throw new HttpException('Error al crear post', HttpStatus.INTERNAL_SERVER_ERROR);
    }
  }

  async getPosts(): Promise<Post[]> {
    return this.postRepository.find({
      relations: ['author'],
    });
  }
}
