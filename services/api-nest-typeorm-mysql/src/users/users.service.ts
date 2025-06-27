import { Injectable, HttpException, HttpStatus } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { User } from './user.entity';
import { Repository } from 'typeorm';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { CreateUserProfileDto } from './dto/create-profile.dto';
import { Profile } from './profile.entity';

@Injectable()
export class UsersService {
  constructor(
    @InjectRepository(User) private userRepository: Repository<User>,
    @InjectRepository(Profile) private profileRepository: Repository<Profile>,
  ) {}

  async createUser(user: CreateUserDto): Promise<User> {
    const userFound = await this.userRepository.findOne({
      where: {
        username: user.username,
      },
    });

    if (userFound) {
      throw new HttpException('El usuario ya existe', HttpStatus.CONFLICT);
    }
    
    const newUser = this.userRepository.create(user);
    return this.userRepository.save(newUser);
  }

  async getUsers(): Promise<User[]> {
    return this.userRepository.find({
      relations: ['posts', 'profile'],
    });
  }

  async getUser(id: number): Promise<User> {
    const userFound = await this.userRepository.findOne({
      where: { id },
      relations: ['posts', 'profile'],
    });

    if (!userFound) {
      throw new HttpException('Usuario no encontrado', HttpStatus.NOT_FOUND);
    }

    return userFound;
  }

  async deleteUser(id: number): Promise<{ affected: number }> {
    const result = await this.userRepository.delete({ id });

    if (result.affected === 0) {
      throw new HttpException('Usuario no encontrado', HttpStatus.NOT_FOUND);
    }

    return { affected: result.affected ?? 0 };
  }

  async updateUser(id: number, user: UpdateUserDto): Promise<User> {
    const userFound = await this.userRepository.findOne({
      where: { id },
    });

    if (!userFound) {
      throw new HttpException('Usuario no encontrado', HttpStatus.NOT_FOUND);
    }

    const userUpdate = Object.assign(userFound, user);
    return this.userRepository.save(userUpdate);
  }

  async createProfile(id: number, profile: CreateUserProfileDto): Promise<User> {
    const userFound = await this.userRepository.findOne({
      where: { id },
    });

    if (!userFound) {
      throw new HttpException('Usuario no encontrado', HttpStatus.NOT_FOUND);
    }

    const newProfile = this.profileRepository.create(profile);
    const savedProfile = await this.profileRepository.save(newProfile);

    userFound.profile = savedProfile;
    return this.userRepository.save(userFound);
  }
}
